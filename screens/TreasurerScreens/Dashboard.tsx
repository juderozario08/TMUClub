import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";
import { useRoute } from "@react-navigation/native";

const Dashboard = ({ navigation }) => {
    const route = useRoute();
    const { user, classes, payments } = route.params;
    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Welcome {user.name}</Text>
        </View>
    );
};

export default Dashboard;
