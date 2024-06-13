import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Styles } from "../../Colors";
import axios from "axios";
import { userURI } from "../../globalRoutes";

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);

    const changeUserInfo = () => {
        console.log("Updating user information...");
    };

    const fetchUserInfo = async () => {
        try {
            const id = await AsyncStorage.getItem("id");
            console.log(id);
            if (!id) {
                console.log("User ID not found in AsyncStorage.");
            }
            const response = await axios.get(`${userURI}/${id}`);
            setUserInfo(response.data);
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
                        <TouchableOpacity
                            style={Styles.SubmitButton}
                            onPress={changeUserInfo}
                        >
                            <Text style={Styles.SubmitButtonText}>Update Information</Text>
                        </TouchableOpacity>
                    </View>
                )
                : <Text style={Styles.MainText}>Loading user information...</Text>}
        </View>
    );
};

export default Profile;
