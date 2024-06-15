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

interface SignUpProps {
    navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [usernameValidity, setUsernameValidity] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [phoneNumberValidity, setPhoneNumberValidity] = useState(false);
    const [error, setError] = useState("");
    const [passwordShow, setPasswordShow] = useState(false);

    const handleSignup = (): void => {
        const userData = {
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
        };
        axios
            .post(`${signUpURI}`, userData)
            .then((_) => {
                Alert.alert("User created successfully.");
                navigation.navigate("Login");
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
        setEmail(text.replace(" ", ""));
        setEmailValidity(false);
        if (text.match(emailRegex)) setEmailValidity(true);
    };

    const validateUsername = (text: string) => {
        setUsername(text);
        setUsernameValidity(false);
        if (text.length >= 3) setUsernameValidity(true);
    };

    const validatePassword = (text: string) => {
        setPassword(text.trim());
        setPasswordValidity(false);
        if (text.match(passwordRegex)) setPasswordValidity(true);
    };

    const validatePhoneNumber = (text: string) => {
        setPhoneNumber(text);
        setPhoneNumberValidity(false);
        if (text.match(phoneNumberRegex)) setPhoneNumberValidity(true);
    };

    const inputBoxes = [
        {
            placeholder: "Full Name: ",
            autoComplete: "name" as TextInputProps["autoComplete"],
            value: name,
            secureTextEntry: false,
            keyboardType: "default" as KeyboardTypeOptions,
            valid: usernameValidity,
            errorText: "Username must be at least 3 characters long.",
            onChangeText: (text: string) => validateUsername(text),
        },
        {
            placeholder: "Phone Number: ",
            autoComplete: "tel" as TextInputProps["autoComplete"],
            value: phoneNumber,
            secureTextEntry: false,
            keyboardType: "phone-pad" as KeyboardTypeOptions,
            valid: phoneNumberValidity,
            errorText: "Please enter a valid phone number.",
            onChangeText: (text: string) => validatePhoneNumber(text),
        },
        {
            placeholder: "Email: ",
            autoComplete: "email" as TextInputProps["autoComplete"],
            value: email,
            secureTextEntry: false,
            keyboardType: "email-address" as KeyboardTypeOptions,
            valid: emailValidity,
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
                                : determineEyeWithColor(passwordValidity, passwordShow)}
                        </TouchableOpacity>
                    </View>
                    <View>
                        {password && !passwordValidity ? (
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
                            usernameValidity &&
                            emailValidity &&
                            passwordValidity &&
                            phoneNumberValidity
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
