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
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="SignUp"
                    initialParams={{ role: ROLE.Member, action: ACTION.SIGNUP }}
                    component={UserAdd}
                />
                <Stack.Screen name="MemberScreen" component={MemberNavigator} />
                <Stack.Screen name="CoachScreen" component={CoachNavigator} />
                <Stack.Screen name="TreasurerScreen" component={TreasurerNavigator} />
                <Stack.Screen
                    name="MemberAdd"
                    initialParams={{ role: ROLE.Member, action: ACTION.ADD }}
                    options={{
                        title: "Add Member",
                    }}
                    component={UserAdd}
                />
                <Stack.Screen
                    name="CoachAdd"
                    initialParams={{ role: ROLE.Coach, action: ACTION.ADD }}
                    component={UserAdd}
                />
                <Stack.Screen
                    name="TreasurerAdd"
                    initialParams={{ role: ROLE.Treasurer, action: ACTION.ADD }}
                    component={UserAdd}
                />
            </Stack.Navigator>
            <StatusBar style="auto" hideTransitionAnimation="slide" />
        </NavigationContainer>
    );
}
