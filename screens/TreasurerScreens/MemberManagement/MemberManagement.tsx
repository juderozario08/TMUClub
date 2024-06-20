import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MemberManagementHome from "./MemberManagementHome";
import MemberAdd from "./MemberAdd";

const Stack = createNativeStackNavigator();

const MemberManagement = () => (
    <Stack.Navigator
        initialRouteName={"User Dashboard"}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen
            name="Member Management Home"
            component={MemberManagementHome}
        />
        <Stack.Screen name="Member Add" component={MemberAdd} />
    </Stack.Navigator>
);

export default MemberManagement;
