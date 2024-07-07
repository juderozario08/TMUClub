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
import { CheckSquare, X } from "react-native-feather";
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
import { Action } from "../Customs/Enums";

type UserAddNavType = NativeStackNavigationProp<DefaultParamList>;

interface SignUpProps {
	navigation: UserAddNavType;
	role: string;
	action: number;
}

const UserAdd: React.FC<SignUpProps> = ({ navigation, role, action }) => {
	const [user, setUser] = useState<UserType>({
		name: "",
		email: "",
		password: "",
		phoneNumber: "",
		role: role,
		classes: [],
		payments: [],
		balance: 0,
	});

	const [userValidity, setUserValidity] = useState({
		name: false,
		email: false,
		password: false,
		phoneNumber: false,
	});

	const title =
		action === Action.SIGNUP
			? "Sign Up"
			: `Add ${role[0].toUpperCase() + role.slice(1)}`;

	const handleInput = (tag: string, value: string) => {
		setUser({
			...user,
			[tag]: value,
		});
	};

	const handleValidity = (tag: string, value: boolean) => {
		setUserValidity({
			...userValidity,
			[tag]: value,
		});
	};

	const [error, setError] = useState("");
	const [passwordShow, setPasswordShow] = useState(false);

	const handleSignup = async () => {
		await axios
			.post(`${SignUpURI}/member`, user)
			.then(() => {
				console.log("User created successfully.");
				navigation.navigate("Login" as never);
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

	const validateEmail = (text: string) => {
		handleInput("email", text.replace(" ", ""));
		handleValidity("email", false);
		if (text.match(emailRegex)) handleValidity("email", true);
	};

	const validateUsername = (text: string) => {
		handleInput("name", text);
		handleValidity("name", false);
		if (text.length >= 3) handleValidity("name", true);
	};

	const validatePassword = (text: string) => {
		handleInput("password", text.trim());
		handleValidity("password", false);
		if (text.match(passwordRegex)) handleValidity("password", true);
	};

	const validatePhoneNumber = (text: string) => {
		handleInput("phoneNumber", text);
		handleValidity("phoneNumber", false);
		if (text.length === 10 && text.match(phoneNumberRegex))
			handleValidity("phoneNumber", true);
	};

	const inputBoxes = [
		{
			placeholder: "Full Name: ",
			autoComplete: "name" as TextInputProps["autoComplete"],
			value: user.name,
			keyboardType: "default" as KeyboardTypeOptions,
			valid: userValidity.name,
			errorText: "Username must be at least 3 characters long.",
			onChangeText: (text: string) => validateUsername(text),
		},
		{
			placeholder: "Phone Number: ",
			autoComplete: "tel" as TextInputProps["autoComplete"],
			value: user.phoneNumber,
			keyboardType: "phone-pad" as KeyboardTypeOptions,
			valid: userValidity.phoneNumber,
			errorText: "Please enter a valid phone number.",
			onChangeText: (text: string) => validatePhoneNumber(text),
		},
		{
			placeholder: "Email: ",
			autoComplete: "email" as TextInputProps["autoComplete"],
			value: user.email,
			keyboardType: "email-address" as KeyboardTypeOptions,
			valid: userValidity.email,
			errorText: "Please enter a valid email address.",
			onChangeText: (text: string) => validateEmail(text),
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
					<InputView
						key={idx}
						value={inp.value}
						onChangeText={inp.onChangeText}
						completionType={inp.autoComplete}
						keyboardType={inp.keyboardType}
						capitalize={"none"}
						title={inp.placeholder}
						error={inp.value.length < 1 || inp.valid ? null : inp.errorText}
					>
						{inp.value.length < 1 ? null : inp.valid ? (
							<CheckSquare
								stroke={"green"}
								fill={"none"}
								style={Styles.Feather}
							/>
						) : (
							<X stroke={"red"} fill={"none"} style={Styles.Feather} />
						)}
					</InputView>
				))}

				{/*This part is for the passwords*/}
				<InputView
					onChangeText={validatePassword}
					value={user.password}
					capitalize={"none"}
					completionType={"password" as TextInputProps["autoComplete"]}
					keyboardType={"default"}
					secured={!passwordShow}
					error={
						user.password && !userValidity.password
							? "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
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
							: determineEyeWithColor(userValidity.password, passwordShow)}
					</Pressable>
				</InputView>
			</View>
			<SubmitButton
				error={error}
				pressed={() => {
					if (
						userValidity.name &&
						userValidity.email &&
						userValidity.password &&
						userValidity.phoneNumber
					) {
						handleSignup();
					}
				}}
				title={"Sign Up"}
			/>
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
