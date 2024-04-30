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
import { CheckCircle, Eye, EyeOff, X } from "react-native-feather";
import { uri } from "../utils/utils.js";
import axios from "axios";

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [error, setError] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    const determineEye = (err, show) => {
        const col = err ? "red" : "green";
        return show
            ? (
                <Eye
                    fill={"none"}
                    stroke={col}
                />
            )
            : (
                <EyeOff
                    fill={"none"}
                    stroke={col}
                />
            );
    };

    const handleSignup = () => {
        const userData = {
            name: username,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
        };
        axios.post(`http://10.0.0.26:3000/users`, userData)
            .then((res) => {
                console.log(res.data);
                navigation.navigate("Login");
            }).catch((err) => {
                console.log(err);
                setError(true);
            });
    };

    const validateEmail = (text) => {
        setEmail(text);
        setEmailError(false);
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
            !text.toLowerCase().trim().match(emailRegex)
        ) {
            setEmailError(true);
        }
    };
    const validateUsername = (text) => {
        setUsername(text);
        setUsernameError(false);
        if (text.length < 3) {
            setUsernameError(true);
        }
    };
    const validatePassword = (text) => {
        setPassword(text.trim());
        setPasswordError(false);
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (text.length < 8 || !text.trim().match(passwordRegex)) {
            setPasswordError(true);
        }
    };
    const validatePhoneNumber = (text) => {
        setPhoneNumber(text.trim());
        setPhoneNumberError(false);
        const phoneNumberRegex =
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (!text.trim().match(phoneNumberRegex)) {
            setPhoneNumberError(true);
        }
    };
    const inputBoxes = [
        {
            placeholder: "Full Name: ",
            autoComplete: "username",
            value: username,
            secureTextEntry: false,
            keyboardType: "default",
            error: usernameError,
            errorText: "Username must be at least 3 characters long.",
            onChangeText: (text) => validateUsername(text),
        },
        {
            placeholder: "Phone Number: ",
            autoComplete: "tel",
            value: phoneNumber,
            secureTextEntry: false,
            keyboardType: "phone-pad",
            error: phoneNumberError,
            errorText: "Please enter a valid phone number.",
            onChangeText: (text) => validatePhoneNumber(text),
        },
        {
            placeholder: "Email: ",
            autoComplete: "email",
            value: email,
            secureTextEntry: false,
            keyboardType: "email-address",
            error: emailError,
            errorText: "Please enter a valid email address.",
            onChangeText: (text) => validateEmail(text),
        },
    ];
    return (
        <KeyboardAvoidingView
            style={Styles.MainContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={Styles.MainText} className="mb-2 mt-16">Please Sign Up</Text>
            <View className="w-full gap-6 pt-5 px-2">
                {inputBoxes.map((inp, idx) => (
                    <View key={idx}>
                        <View
                            style={Styles.InputBox}
                            className="flex-row justify-self-start"
                        >
                            <Text style={Styles.InputBoxText}>{inp.placeholder}</Text>
                            <TextInput
                                style={Styles.Input}
                                onChangeText={inp.onChangeText}
                                value={inp.value}
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
                        <View>
                            {inp.value && inp.error
                                ? <Text className="text-red-500 left-1">{inp.errorText}</Text>
                                : null}
                        </View>
                    </View>
                ))}

                {/*This part is for the passwords*/}
                <View>
                    <View
                        style={Styles.InputBox}
                        className="flex-row justify-self-start"
                    >
                        <Text style={Styles.InputBoxText}>{"Password: "}</Text>
                        <TextInput
                            style={Styles.Input}
                            onChangeText={validatePassword}
                            value={password}
                            autoCapitalize="none"
                            autoComplete={"password"}
                            keyboardType={"default"}
                            secureTextEntry={!passwordShow}
                        />
                        <TouchableOpacity
                            style={Styles.Feather}
                            onPress={() => setPasswordShow(!passwordShow)}
                        >
                            {password.length < 1
                                ? null
                                : determineEye(passwordError, passwordShow)}
                        </TouchableOpacity>
                    </View>
                    <View>
                        {password && passwordError
                            ? (
                                <Text className="text-red-500 left-1">
                                    {"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."}
                                </Text>
                            )
                            : null}
                    </View>
                </View>
            </View>
            <View className="w-full px-10 mb-10">
                <TouchableOpacity
                    className="bg-sky-600 rounded-3xl py-3 w-full mt-10"
                    onPress={handleSignup}
                >
                    <Text className="text-white text-center">Sign Up</Text>
                </TouchableOpacity>
                {error
                    ? (
                        <Text className="text-red-500 text-center pt-3">
                            There was an error. Please try again.
                        </Text>
                    )
                    : null}
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
