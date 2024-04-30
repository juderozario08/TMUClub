import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userURI } from "../utils/utils.js";

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
                console.log(id);
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
        <View className="text-center justify-center align-middle self-center flex-1">
            {userInfo
                ? (
                    <View>
                        <Text>User ID: {userInfo._id}</Text>
                        <Text>Name: {userInfo.name}</Text>
                        <Text>Email: {userInfo.email}</Text>
                        {/* Render other user information as needed */}
                    </View>
                )
                : <Text>Loading user information...</Text>}
        </View>
    );
};

export default MemberScreen;
