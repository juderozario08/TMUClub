import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userURI } from "../../globalRoutes.js";
import { Styles } from "../../Colors.js";

const Profile = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const changeUserInfo = async () => {
        try {
            const id = await AsyncStorage.getItem("id");
            if (!id) {
                console.log("User ID not found in AsyncStorage.");
                return;
            }
            const response = await axios.put(`${userURI}/${id}`, {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
            });
            setUserInfo(response.data);
            fetchUserInfo();
        } catch (error) {
            console.error(error.message);
        }
    };

    const fetchUserInfo = async () => {
        try {
            const id = await AsyncStorage.getItem("id");
            if (!id) {
                console.log("User ID not found in AsyncStorage.");
                return;
            }
            const response = await axios.get(`${userURI}/${id}`);
            setUserInfo(response.data);
            setName(userInfo.name);
            setEmail(userInfo.email);
            setPhoneNumber(userInfo.phoneNumber);
            setPassword(userInfo.password);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <View style={Styles.MainContainer}>
            {userInfo
                ? (
                    <View>
                        <Text style={Styles.MainText}>{userInfo.name}</Text>
                        <Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
                        <Text style={Styles.MainSubText}>
                            Email: {userInfo.phoneNumber}
                        </Text>
                        <TouchableOpacity style={Styles.SubmitButton} onPress={changeUserInfo}>
                            <Text style={Styles.SubmitButtonText}>Update Information</Text>
                        </TouchableOpacity>
                    </View>
                )
                : <Text style={Styles.MainText}>Loading user information...</Text>}
        </View>
    );
};

export default Profile;
