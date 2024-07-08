import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import UserAdd from "./screens/UserAdd";
import TreasurerNavigator from "./screens/TreasurerScreens/TreasurerNavigator";
import MemberNavigator from "./screens/MemberScreens/MemberNavigator";
import CoachNavigator from "./screens/CoachScreens/CoachNavigator";
import { ACTION, ROLE } from "./Customs/Enums";

type RootStackParamList = {
    Login: undefined;
    SignUp: { role: ROLE; action: ACTION };
    "Member Screen": { role: ROLE.Member; action: ACTION.ADD };
    "Coach Screen": { role: ROLE.Coach; action: ACTION.ADD };
    "Treasurer Screen": { role: ROLE.Treasurer; action: ACTION.ADD };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="SignUp"
                    initialParams={{ role: ROLE.Member, action: ACTION.SIGNUP }}
                    component={UserAdd}
                />
                <Stack.Screen
                    name="Member Screen"
                    initialParams={{ role: ROLE.Member, action: ACTION.ADD }}
                    component={MemberNavigator}
                />
                <Stack.Screen
                    name="Coach Screen"
                    initialParams={{ role: ROLE.Coach, action: ACTION.ADD }}
                    component={CoachNavigator}
                />
                <Stack.Screen
                    name="Treasurer Screen"
                    initialParams={{ role: ROLE.Treasurer, action: ACTION.ADD }}
                    component={TreasurerNavigator}
                />
            </Stack.Navigator>
            <StatusBar style="auto" hideTransitionAnimation="slide" />
        </NavigationContainer>
    );
}
