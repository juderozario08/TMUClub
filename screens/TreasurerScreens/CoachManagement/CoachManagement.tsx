import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoachAdd from "./CoachAdd";
import CoachManagementHome from "./CoachManagementHome";

const Stack = createNativeStackNavigator();

const CoachManagement = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Coach Management Home"}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={"Coach Management Home"}
                component={CoachManagementHome}
            />
            <Stack.Screen name={"Coach Add"} component={CoachAdd} />
        </Stack.Navigator>
    );
};

export default CoachManagement;
