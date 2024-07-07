import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import TreasurerNavigator from "./screens/TreasurerScreens/TreasurerNavigator";
import MemberNavigator from "./screens/MemberScreens/MemberNavigator";
import CoachNavigator from "./screens/CoachScreens/CoachNavigator";

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
                <Stack.Screen name="Member Screen" component={MemberNavigator} />
                <Stack.Screen name="Coach Screen" component={CoachNavigator} /> */}
				<Stack.Screen name="Treasurer Screen" component={TreasurerNavigator} />
			</Stack.Navigator>
			<StatusBar style="auto" hideTransitionAnimation="slide" />
		</NavigationContainer>
	);
}
