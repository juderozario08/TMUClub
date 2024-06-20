import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TreasurerManagementHome from "./TreasurerManagementHome";
import TreasurerAdd from "./TreasurerAdd";

const Stack = createNativeStackNavigator();

const TreasurerManagement = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Treasurer Management Home"}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={"Treasurer Management Home"}
                component={TreasurerManagementHome}
            />
            <Stack.Screen name={"Treasurer Add"} component={TreasurerAdd} />
        </Stack.Navigator>
    );
};

export default TreasurerManagement;
