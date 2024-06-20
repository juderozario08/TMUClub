import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";

const UserDashboard = () => {
    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.WelcomeText}>User Dashboard</Text>
        </View>
    );
};

export default UserDashboard;
