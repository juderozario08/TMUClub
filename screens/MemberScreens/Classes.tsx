import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

const Classes = () => {
    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.WelcomeText}>Classes</Text>
        </View>
    );
};

export default Classes;
