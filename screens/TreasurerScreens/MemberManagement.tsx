import React from "react";
import MemberAdd from "./MemberManagement/MemberAdd";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MemberManagementHome from "./MemberManagement/MemberManagementHome";

const Stack = createNativeStackNavigator();

const MemberManagement = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: "fade_from_bottom",
                autoHideHomeIndicator: true,
            }}
        >
            <Stack.Screen
                name={"MemberID Managed"}
                component={MemberManagementHome}
            />
            <Stack.Screen name={"Add Member"} component={MemberAdd} />
        </Stack.Navigator>
    );
};

export default MemberManagement;
