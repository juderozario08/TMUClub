import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	Pressable,
	View,
} from "react-native";
import { Styles } from "../Colors";
import axios from "axios";
import { loginURI } from "../globalRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Eye, EyeOff } from "react-native-feather";

interface LoginProps {
	navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }): React.JSX.Element => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [passwordShow, setPasswordShow] = useState(false);
	const determineEye = () => {
		return passwordShow ? (
			<Eye color={"darkgray"} fill={"none"} />
		) : (
			<EyeOff color={"darkgray"} fill={"none"} />
		);
	};
	const handleLogin = () => {
		axios
			.post(`${loginURI}`, {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					AsyncStorage.setItem("id", res.data.id);
					if (res.data.role === "member") {
						navigation.navigate(`Member Screen`);
					} else if (res.data.role === "coach") {
						navigation.navigate("Coach Screen");
					} else if (res.data.role === "treasurer") {
						navigation.navigate("Treasurer Screen");
					}
				}
			})
			.catch((err) => {
				console.error(err.message);
				if (err.response && err.response.status === 404) {
					setError("User not found.");
				} else if (err.response && err.response.status === 401) {
					setError("Incorrect password.");
				} else if (err.response && err.response.status === 500) {
					setError("Internal server error.");
				} else {
					setError("An error has occured. Please try again.");
				}
			});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={[Styles.MainContainer, { paddingTop: 80 }]}
		>
			<Text style={Styles.MainText}>Welcome To</Text>
			<Text style={Styles.MainText}>TMU Dance Club</Text>
			<View
				style={{
					width: "100%",
					gap: 20,
					marginTop: 40,
					paddingVertical: 20,
					paddingHorizontal: 8,
				}}
			>
				<View style={Styles.InputBox}>
					<Text style={Styles.InputBoxText}>{"Email: "}</Text>
					<TextInput
						style={Styles.Input}
						onChangeText={(text) => setEmail(text.trim())}
						value={email}
						placeholderTextColor="lightgray"
						autoCapitalize="none"
						autoComplete="email"
					/>
				</View>
				<View style={Styles.InputBox}>
					<Text style={Styles.InputBoxText}>{"Password: "}</Text>
					<TextInput
						style={Styles.Input}
						onChangeText={setPassword}
						value={password}
						placeholderTextColor="lightgray"
						secureTextEntry={!passwordShow}
						autoCapitalize="none"
						autoComplete="password"
					/>
					<Pressable
						style={Styles.Feather}
						onPress={() => {
							setPasswordShow(!passwordShow);
						}}
					>
						{determineEye()}
					</Pressable>
				</View>
			</View>
			<View style={{ width: "100%", paddingHorizontal: 40, marginBottom: 20 }}>
				<Pressable style={Styles.SubmitButton} onPress={handleLogin}>
					<Text style={Styles.SubmitButtonText}>Login</Text>
				</Pressable>
				<Text style={Styles.SubmitButtonErrorText}>{error}</Text>
			</View>
			<View style={Styles.BottomTextContainer}>
				<Text style={Styles.BottomText}>Don't have an account? </Text>
				<Pressable
					onPress={() => {
						navigation.navigate("SignUp");
					}}
				>
					<Text style={Styles.BottomTextLink}>Sign Up</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Login;
