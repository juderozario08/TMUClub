import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { StatusBar } from "expo-status-bar";
import MemberScreen from "./screens/MemberScreens/MemberScreen";
import CoachScreen from "./screens/CoachScreens/CoachScreen";
import TreasurerScreen from "./screens/TreasurerScreens/TreasurerScreen";

const Stack = createNativeStackNavigator();

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
                {/* <Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="Member Screen" component={MemberScreen} />
				<Stack.Screen name="Coach Screen" component={CoachScreen} /> */}
                <Stack.Screen name="Treasurer Screen" component={TreasurerScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" hideTransitionAnimation="slide" />
        </NavigationContainer>
    );
}
