import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { userURI } from "../utils/utils.js";
import { Styles } from "../Colors.js";

const Tab = createBottomTabNavigator();

const MemberScreen = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const id = await AsyncStorage.getItem("id");
                if (!id) {
                    console.log("User ID not found in AsyncStorage.");
                    return;
                }
                const response = await axios.get(`${userURI}/${id}`);
                if (response.status !== 200) {
                    console.log("Error fetching user info:", response.statusText);
                    return;
                }
                setUserInfo(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchUserInfo();
    }, []);

    return (
        <View style={Styles.MainContainer}>
            {userInfo
                ? (
                    <View>
                        <Text style={Styles.MainSubText}>Name: {userInfo.name}</Text>
                        <Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
                        <Text style={Styles.MainSubText}>
                            Email: {userInfo.phoneNumber}
                        </Text>
                    </View>
                )
                : <Text style={Styles.MainText}>Loading user information...</Text>}
        </View>
    );
};

export default MemberScreen;
