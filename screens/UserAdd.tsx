import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	Pressable,
	View,
	KeyboardTypeOptions,
} from "react-native";
import { Styles } from "../Colors";
import { ArrowLeft, CheckSquare, X } from "react-native-feather";
import { SignUpURI } from "../Globals/Routes";
import axios from "axios";
import {
	determineEyeWithColor,
	emailRegex,
	passwordRegex,
	phoneNumberRegex,
} from "../Globals/Functions";
import { TextInputProps } from "react-native-paper";
import InputView from "../Customs/InputBox";
import SubmitButton from "../Customs/SubmitButton";
import { DefaultParamList, UserType } from "../Customs/Types";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ACTION, ROLE } from "../Customs/Enums";
import ModalView from "../Customs/ModalView";
import { GetUsersByRole, SetUsersByRole } from "../Globals/AppValues";

type UserAddNavType = NativeStackNavigationProp<DefaultParamList>;

interface UserAddProps {
	navigation: UserAddNavType;
	route: any;
}

const UserAdd: React.FC<UserAddProps> = ({ navigation, route }) => {
	const [user, setUser] = useState<UserType>({
		name: "",
		email: "",
		password: "",
		role: ROLE.MEMBER,
		classes: [],
		payments: [],
		phoneNumber: "",
		balance: 0,
	});

	const handleInput = (tag: string, value: string) => {
		setUser({
			...user,
			[tag]: value,
		});
	};

	const action: number = route.params.action;
	const role: string = route.params.role;

	const userValidity = {
		name: () => (user.name.length >= 3 ? true : false),
		email: () => (user.email.match(emailRegex) ? true : false),
		phoneNumber: () =>
			user.phoneNumber.match(phoneNumberRegex) ? true : false,
		password: () => (user.password.match(passwordRegex) ? true : false),
	};

	const [isModalVisible, setIsModalVisible] = useState(false);

	const title =
		action === ACTION.SIGNUP
			? "Sign Up"
			: `Add ${role[0].toUpperCase() + role.slice(1)}`;

	const [error, setError] = useState("");
	const [passwordShow, setPasswordShow] = useState(false);

	const handleSignup = async () => {
		await axios
			.post(`${SignUpURI}/${role}`, user)
			.then((res: any) => {
				console.log("User created successfully.");
				setError("");
				if (action === ACTION.SIGNUP) navigation.navigate("Login" as never);
				else {
					let users = GetUsersByRole(role);
					users.push(res.data);
					SetUsersByRole(users, role);
					console.log(GetUsersByRole(role), GetUsersByRole(role).length);
					setIsModalVisible(true);
				}
			})
			.catch((err) => {
				if (err.response && err.response.status === 409)
					setError("User with that email already exists.");
				else if (err.response && err.response.status === 400)
					setError("Bad request. Please validate the date.");
				else if (err.response && err.response.status === 500)
					setError("Internal server error.");
				else setError("An error has occured.");
			});
	};

	const inputBoxes = [
		{
			placeholder: "Full Name: " as string,
			autoComplete: "name" as TextInputProps["autoComplete"],
			value: user.name as string,
			keyboardType: "default" as KeyboardTypeOptions,
			valid: userValidity.name as () => boolean,
			errorText: "Username must be at least 3 characters long." as string,
			onChangeText: (text: string) => {
				handleInput("name", text);
			},
		},
		{
			placeholder: "Phone Number: " as string,
			autoComplete: "tel" as TextInputProps["autoComplete"],
			value: user.phoneNumber as string,
			keyboardType: "phone-pad" as KeyboardTypeOptions,
			valid: userValidity.phoneNumber as () => boolean,
			errorText: "Please enter a valid phone number." as string,
			onChangeText: (text: string) => {
				handleInput("phoneNumber", text.trim());
			},
		},
		{
			placeholder: "Email: " as string,
			autoComplete: "email" as TextInputProps["autoComplete"],
			value: user.email as string,
			keyboardType: "email-address" as KeyboardTypeOptions,
			valid: userValidity.email as () => boolean,
			errorText: "Please enter a valid email address." as string,
			onChangeText: (text: string) => {
				handleInput("email", text.trim());
			},
		},
	];

	return (
		<KeyboardAvoidingView
			style={Styles.MainContainer}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<Text style={[Styles.MainText, styles.headerText]}>{title}</Text>
			<View style={styles.inputView}>
				{inputBoxes.map((inp, idx) => (
					<View key={idx}>
						<InputView
							value={inp.value}
							onChangeText={inp.onChangeText}
							completionType={inp.autoComplete}
							keyboardType={inp.keyboardType}
							capitalize={"none"}
							title={inp.placeholder}
							error={inp.value.length < 1 || inp.valid() ? null : inp.errorText}
						>
							{inp.value.length < 1 ? null : inp.valid() ? (
								<CheckSquare
									stroke={"green"}
									fill={"none"}
									style={Styles.Feather}
								/>
							) : (
								<X stroke={"red"} fill={"none"} style={Styles.Feather} />
							)}
						</InputView>
					</View>
				))}

				{/*This part is for the passwords*/}
				<InputView
					onChangeText={(text: string) => {
						handleInput("password", text);
					}}
					value={user.password}
					capitalize={"none"}
					completionType={"password" as TextInputProps["autoComplete"]}
					keyboardType={"default"}
					secured={!passwordShow}
					error={
						user.password && !userValidity.password
							? "Password must be at least 8 characters long, contain at least one uppercase letter, " +
								"one lowercase letter, one number, and one special character."
							: null
					}
					title={"Password: "}
				>
					<Pressable
						style={Styles.Feather}
						onPress={() => setPasswordShow(!passwordShow)}
					>
						{user.password.length < 1
							? null
							: determineEyeWithColor(userValidity.password(), passwordShow)}
					</Pressable>
				</InputView>
			</View>
			<SubmitButton
				error={error}
				pressed={() => {
					if (
						userValidity.name() &&
						userValidity.email() &&
						userValidity.password() &&
						userValidity.phoneNumber()
					) {
						handleSignup();
					}
				}}
				title={title}
			/>
			{action === ACTION.ADD ? (
				<Pressable
					onPress={() => {
						navigation.goBack();
					}}
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<ArrowLeft stroke="white" fill="none" height={25} width={25} />
					<Text style={{ color: "white", fontSize: 20 }}>Go Back</Text>
				</Pressable>
			) : (
				<View style={Styles.BottomTextContainer}>
					<Text style={Styles.BottomText}>Already have an account?</Text>
					<Pressable
						onPress={() => {
							navigation.navigate("Login" as never);
						}}
					>
						<Text style={Styles.BottomTextLink}>{" Login"}</Text>
					</Pressable>
				</View>
			)}
			<ModalView
				title={title}
				isVisible={isModalVisible}
				setIsVisible={setIsModalVisible}
			>
				<Text>{role[0].toUpperCase() + role.slice(1)} Added</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: "80%",
					}}
				>
					<Pressable
						onPress={() => {
							GetUsersByRole(role).push(user);
							user.name = "";
							user.email = "";
							user.password = "";
							user.phoneNumber = "";
							setIsModalVisible(false);
						}}
					>
						<Text>Yes</Text>
					</Pressable>
					<Pressable
						onPress={() => {
							GetUsersByRole(role).push(user);
							setIsModalVisible(false);
							navigation.goBack();
						}}
					>
						<Text>No</Text>
					</Pressable>
				</View>
			</ModalView>
		</KeyboardAvoidingView>
	);
};

export default UserAdd;
const styles = StyleSheet.create({
	headerText: {
		marginBottom: 8,
		marginTop: 64,
	},
	inputView: {
		width: "100%",
		gap: 24,
		paddingTop: 20,
		paddingHorizontal: 8,
	},
	errorBottomText: {
		color: "#EF4444",
		left: 4,
	},
});
