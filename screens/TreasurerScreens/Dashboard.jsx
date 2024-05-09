import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors.js";

const Dashboard = () => {
    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Treasurer Dashboard</Text>
        </View>
    );
};

export default Dashboard;
