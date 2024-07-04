import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Styles } from "../../Colors";
import axios from "axios";
import { UserURI } from "../../Globals/Routes";
import { SetUser, User } from "../../Globals/AppValues";

const Dashboard = () => {
    /*const fetchUserInfo = async () => {
        try {
            const id = await AsyncStorage.getItem("id");
            if (!id) {
                console.log("User ID not found in AsyncStorage.");
            }
            const response = await axios.get(`${UserURI}/${id}`);
            SetUser(response.data);
        } catch (error) { }
    };*/
    useEffect(() => {
        FetchUser();
    }, [User]);

    return (
        <SafeAreaView style={Styles.WelcomeText}>
            {User ? (
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "white",
                            marginTop: "13%",
                            marginLeft: "8%",
                        }}
                    >
                        Welcome {User.name},
                    </Text>
                    <View style={Styles.MainContainer}>
                        <Text style={Styles.MainSubText}>Email: {User.email}</Text>
                        <Text style={Styles.MainSubText}>
                            PhoneNumber: {User.phoneNumber}
                        </Text>
                    </View>
                </View>
            ) : (
                <Text style={Styles.MainText}>Loading user information...</Text>
            )}
        </SafeAreaView>
    );
};

export default Dashboard;
