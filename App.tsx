import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import UserAdd from "./screens/UserAdd";
import TreasurerNavigator from "./screens/TreasurerScreens/TreasurerNavigator";
import MemberNavigator from "./screens/MemberScreens/MemberNavigator";
import CoachNavigator from "./screens/CoachScreens/CoachNavigator";
import { ACTION, ROLE } from "./Customs/Enums";
import { StackNavType } from "./Customs/Types";

const Stack = createNativeStackNavigator<StackNavType>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "fade_from_bottom",
                    autoHideHomeIndicator: true,
                }}
            >
                {/* <Stack.Screen name="Login" component={Login} /> */}
                {/* <Stack.Screen name="SignUp" component={UserAdd} /> */}
                {/* <Stack.Screen name="MemberScreen" component={MemberNavigator} /> */}
                {/* <Stack.Screen name="CoachScreen" component={CoachNavigator} /> */}
                <Stack.Screen name="TreasurerScreen" component={TreasurerNavigator} />
            </Stack.Navigator>
            <StatusBar style="auto" hideTransitionAnimation="slide" />
        </NavigationContainer>
    );
}
