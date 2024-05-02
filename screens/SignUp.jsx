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
} from "react-native";
import { Styles } from "../Colors.js";
import { CheckCircle, Eye, EyeOff, X } from "react-native-feather";
import { signUpURI } from "../globalRoutes.js";
import axios from "axios";

const SignUp = ({ navigation }) => {
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

    const determineEye = (valid, show) => {
        const col = valid ? "green" : "red";
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
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
        };
        axios.post(`${signUpURI}`, userData).then((_) => {
            Alert.alert("User created successfully.");
            navigation.navigate("Login");
        }).catch((err) => {
            if (err.response && err.response.status === 409) {
                setError("User with that email already exists.");
            } else if (err.response && err.response.status === 400) {
                setError("Bad request. Please validate the date.");
            } else if (err.response && err.response.status === 500) {
                setError("Internal server error.");
            } else {
                setError("An error has occured.");
            }
        });
    };

    const validateEmail = (text) => {
        setEmail(text);
        setEmailValidity(false);
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
            text.toLowerCase().trim().match(emailRegex)
        ) {
            setEmailValidity(true);
        }
    };
    const validateUsername = (text) => {
        setUsername(text);
        setUsernameValidity(false);
        if (text.length >= 3) {
            setUsernameValidity(true);
        }
    };
    const validatePassword = (text) => {
        setPassword(text.trim());
        setPasswordValidity(false);
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&\.]{8,}$/;
        if (text.length >= 8 && text.trim().match(passwordRegex)) {
            setPasswordValidity(true);
        }
    };
    const validatePhoneNumber = (text) => {
        setPhoneNumber(text.trim());
        setPhoneNumberValidity(false);
        const phoneNumberRegex =
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (text.trim().match(phoneNumberRegex)) {
            setPhoneNumberValidity(true);
        }
    };
    const inputBoxes = [
        {
            placeholder: "Full Name: ",
            autoComplete: "name",
            value: name,
            secureTextEntry: false,
            keyboardType: "default",
            valid: usernameValidity,
            errorText: "Username must be at least 3 characters long.",
            onChangeText: (text) => validateUsername(text),
        },
        {
            placeholder: "Phone Number: ",
            autoComplete: "tel",
            value: phoneNumber,
            secureTextEntry: false,
            keyboardType: "phone-pad",
            valid: phoneNumberValidity,
            errorText: "Please enter a valid phone number.",
            onChangeText: (text) => validatePhoneNumber(text),
        },
        {
            placeholder: "Email: ",
            autoComplete: "email",
            value: email,
            secureTextEntry: false,
            keyboardType: "email-address",
            valid: emailValidity,
            errorText: "Please enter a valid email address.",
            onChangeText: (text) => validateEmail(text),
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
                        <View
                            style={[Styles.InputBox]}
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
                            {inp.value.length < 1 ? null : inp.valid
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
                            {inp.value && !inp.valid
                                ? (
                                    <Text style={styles.errorBottomText}>
                                        {inp.errorText}
                                    </Text>
                                )
                                : null}
                        </View>
                    </View>
                ))}

                {/*This part is for the passwords*/}
                <View>
                    <View
                        style={Styles.InputBox}
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
                                : determineEye(passwordValidity, passwordShow)}
                        </TouchableOpacity>
                    </View>
                    <View>
                        {password && !passwordValidity
                            ? (
                                <Text style={styles.errorBottomText}>
                                    {"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."}
                                </Text>
                            )
                            : null}
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
                {error.length > 1
                    ? (
                        <Text
                            style={Styles.SubmitButtonErrorText}
                        >
                            {error}
                        </Text>
                    )
                    : null}
            </View>
            <View
                style={Styles.BottomTextContainer}
            >
                <Text
                    style={Styles.BottomText}
                >
                    Already have an account?{" "}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text
                        style={Styles.BottomTextLink}
                    >
                        Login
                    </Text>
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
