import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Styles } from "../Colors.js";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Styles.MainContainer}
            className="pt-20"
        >
            <Text style={Styles.MainText}>Welcome To</Text>
            <Text className="mb-5" style={Styles.MainText}>TMU Dance Club</Text>
            <View className="w-full gap-5 py-5 px-2 ">
                <View style={Styles.InputBox} className="flex-row justify-self-start">
                    <Text style={Styles.InputBoxText}>{"Email: "}</Text>
                    <TextInput
                        style={Styles.Input}
                        onChangeText={setEmail}
                        value={email}
                        placeholderTextColor="lightgray"
                        autoCapitalize="none"
                        autoComplete="email"
                    />
                </View>
                <View style={Styles.InputBox} className="flex-row justify-self-start">
                    <Text style={Styles.InputBoxText}>{"Password: "}</Text>
                    <TextInput
                        style={Styles.Input}
                        onChangeText={setPassword}
                        value={password}
                        placeholderTextColor="lightgray"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoComplete="password"
                    />
                </View>
            </View>

            <View className="w-full px-10 mb-10">
                <TouchableOpacity
                    className="bg-sky-600 rounded-3xl py-3 w-full"
                    onPress={handleLogin}
                >
                    <Text className="text-white text-center">Login</Text>
                </TouchableOpacity>
            </View>
            <View className="align-middle justify-center flex-row">
                <Text className="text-white text-[14px]">
                    Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                >
                    <Text className="text-[14px] text-sky-600">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;
