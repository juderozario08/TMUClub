import React, { useState } from "react";
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	KeyboardTypeOptions,
} from "react-native";
import { Styles } from "../Colors";
import { CheckCircle, X } from "react-native-feather";
import { signUpURI } from "../globalRoutes";
import axios from "axios";
import {
	determineEyeWithColor,
	emailRegex,
	passwordRegex,
	phoneNumberRegex,
} from "../globalFunctions";
import { TextInputProps } from "react-native-paper";
import { allMembers } from "../globalDBValues";

interface SignUpProps {
	navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
		phoneNumber: "",
	});
	const [userValidity, setUserValidity] = useState({
		name: false,
		email: false,
		password: false,
		phoneNumber: false,
	});
	const handleInput = (tag: string, value: string) => {
		setUserData({
			...userData,
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
		try {
			const res = await axios.post(`${signUpURI}/member`, userData);
			Alert.alert("User created successfully.");
			allMembers.push(res.data);
			navigation.navigate("Login");
		} catch (err: any) {
			if (err.response && err.response.status === 409)
				setError("User with that email already exists.");
			else if (err.response && err.response.status === 400)
				setError("Bad request. Please validate the date.");
			else if (err.response && err.response.status === 500)
				setError("Internal server error.");
			else setError("An error has occured.");
		}
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
		if (text.match(phoneNumberRegex)) handleValidity("phoneNumber", true);
	};

	const inputBoxes = [
		{
			placeholder: "Full Name: ",
			autoComplete: "name" as TextInputProps["autoComplete"],
			value: userData.name,
			secureTextEntry: false,
			keyboardType: "default" as KeyboardTypeOptions,
			valid: userValidity.name,
			errorText: "Username must be at least 3 characters long.",
			onChangeText: (text: string) => validateUsername(text),
		},
		{
			placeholder: "Phone Number: ",
			autoComplete: "tel" as TextInputProps["autoComplete"],
			value: userData.phoneNumber,
			secureTextEntry: false,
			keyboardType: "phone-pad" as KeyboardTypeOptions,
			valid: userValidity.phoneNumber,
			errorText: "Please enter a valid phone number.",
			onChangeText: (text: string) => validatePhoneNumber(text),
		},
		{
			placeholder: "Email: ",
			autoComplete: "email" as TextInputProps["autoComplete"],
			value: userData.email,
			secureTextEntry: false,
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
			<Text style={[Styles.MainText, styles.headerText]}>Please Sign Up</Text>
			<View
				style={{ width: "100%", gap: 24, paddingTop: 20, paddingHorizontal: 8 }}
			>
				{inputBoxes.map((inp, idx) => (
					<View key={idx}>
						<View style={[Styles.InputBox]}>
							<Text style={Styles.InputBoxText}>{inp.placeholder}</Text>
							<TextInput
								style={Styles.Input}
								onChangeText={inp.onChangeText}
								value={inp.value}
								autoCapitalize="none"
								autoComplete={
									inp.autoComplete as TextInputProps["autoComplete"]
								}
								keyboardType={inp.keyboardType}
								secureTextEntry={inp.secureTextEntry}
							/>
							{inp.value.length < 1 ? null : inp.valid ? (
								<CheckCircle
									fill={"none"}
									stroke={"green"}
									style={Styles.Feather}
								/>
							) : (
								<X fill={"none"} stroke={"red"} style={Styles.Feather} />
							)}
						</View>
						<View>
							{inp.value && !inp.valid ? (
								<Text style={styles.errorBottomText}>{inp.errorText}</Text>
							) : null}
						</View>
					</View>
				))}

				{/*This part is for the passwords*/}
				<View>
					<View style={Styles.InputBox}>
						<Text style={Styles.InputBoxText}>{"Password: "}</Text>
						<TextInput
							style={Styles.Input}
							onChangeText={validatePassword}
							value={userData.password}
							autoCapitalize="none"
							autoComplete={"password"}
							keyboardType={"default"}
							secureTextEntry={!passwordShow}
						/>
						<TouchableOpacity
							style={Styles.Feather}
							onPress={() => setPasswordShow(!passwordShow)}
						>
							{userData.password.length < 1
								? null
								: determineEyeWithColor(userValidity.password, passwordShow)}
						</TouchableOpacity>
					</View>
					<View>
						{userData.password && !userValidity.password ? (
							<Text style={styles.errorBottomText}>
								{
									"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
								}
							</Text>
						) : null}
					</View>
				</View>
			</View>
			<View style={{ width: "100%", paddingHorizontal: 40, marginBottom: 40 }}>
				<TouchableOpacity
					style={Styles.SubmitButton}
					onPress={() => {
						if (
							userValidity.name &&
							userValidity.email &&
							userValidity.password &&
							userValidity.phoneNumber
						) {
							handleSignup();
						}
					}}
				>
					<Text style={Styles.SubmitButtonText}>Sign Up</Text>
				</TouchableOpacity>
				{error.length > 1 ? (
					<Text style={Styles.SubmitButtonErrorText}>{error}</Text>
				) : null}
			</View>
			<View style={Styles.BottomTextContainer}>
				<Text style={Styles.BottomText}>Already have an account?</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Login");
					}}
				>
					<Text style={Styles.BottomTextLink}>{" Login"}</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default SignUp;
const styles = StyleSheet.create({
	headerText: {
		marginBottom: 8,
		marginTop: 64,
	},
	errorBottomText: {
		color: "#EF4444",
		left: 4,
	},
});
