import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Styles } from "../Colors";
import { CheckCircle, X } from "react-native-feather";

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = () => {
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm password:", confirmPassword);
        console.log("Phone Number:", phoneNumber);
        console.log("Address:", address);
    };
    const validateEmail = (text) => {
        setEmail(text);
        setEmailError(false);
        if (
            !text.toLowerCase().trim().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
        ) {
            setEmailError(true);
        }
    };
    const validateUsername = (text) => {
        setUsername(text);
    };
    const validatePassword = (text) => {
        setPassword(text);
        setPasswordError(false);
        if (
            text.length < 8 ||
            !text.match(
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
            )
        ) {
            setPasswordError(true);
        }
    };
    const validatePhoneNumber = (text) => {
        setPhoneNumber(text);
    };
    const validateConfirmPassword = (text) => {
        setConfirmPassword(text);
    };
    const validateAddress = (text) => {
        setAddress(text);
    };
    const inputBoxes = [
        {
            placeholder: "Username: ",
            autoComplete: "username",
            value: username,
            secureTextEntry: false,
            keyboardType: "default",
            error: usernameError,
            onChangeText: (text) => validateUsername(text),
        },
        {
            placeholder: "Email: ",
            autoComplete: "email",
            value: email,
            secureTextEntry: false,
            keyboardType: "email-address",
            error: emailError,
            onChangeText: (text) => validateEmail(text),
        },
        {
            placeholder: "Password: ",
            autoComplete: "password",
            value: password,
            secureTextEntry: true,
            keyboardType: "default",
            error: passwordError,
            onChangeText: (text) => validatePassword(text),
        },
        {
            placeholder: "Confirm Password: ",
            autoComplete: "password",
            value: confirmPassword,
            secureTextEntry: true,
            keyboardType: "default",
            error: confirmPasswordError,
            onChangeText: (text) => validateConfirmPassword(text),
        },
        {
            placeholder: "Phone Number: ",
            autoComplete: "tel",
            value: phoneNumber,
            secureTextEntry: false,
            keyboardType: "phone-pad",
            error: phoneNumberError,
            onChangeText: (text) => validatePhoneNumber(text),
        },
        {
            placeholder: "Address: ",
            autoComplete: "street-address",
            value: address,
            secureTextEntry: false,
            keyboardType: "default",
            error: addressError,
            onChangeText: (text) => validateAddress(text),
        },
    ];
    return (
        <KeyboardAvoidingView
            style={Styles.MainContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={Styles.MainText} className="mb-5">Please Sign Up</Text>
            <View className="w-full gap-5 py-5 px-2 ">
                {inputBoxes.map((inp, idx) => (
                    <View
                        key={idx}
                        style={Styles.InputBox}
                        className="flex-row justify-self-start"
                    >
                        <TextInput
                            style={Styles.Input}
                            onChangeText={inp.onChangeText}
                            value={inp.value}
                            placeholder={inp.placeholder}
                            placeholderTextColor="darkgray"
                            autoCapitalize="none"
                            autoComplete={inp.autoComplete}
                            keyboardType={inp.keyboardType}
                            secureTextEntry={inp.secureTextEntry}
                        />
                        {inp.value.length < 1 ? null : !inp.error
                            ? (
                                <CheckCircle
                                    fill={"none"}
                                    stroke={"green"}
                                    style={Styles.Feather}
                                />
                            )
                            : <X fill={"none"} stroke={"red"} style={Styles.Feather} />}
                    </View>
                ))}
            </View>
            <View className="w-full px-10 mb-10">
                <TouchableOpacity
                    className="bg-sky-600 rounded-3xl py-3 w-full"
                    onPress={handleSignup}
                >
                    <Text className="text-white text-center">Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View className="align-middle justify-center flex-row">
                <Text className="text-white text-[14px]">
                    Already have an account?{" "}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text className="text-[14px] text-sky-600">Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
