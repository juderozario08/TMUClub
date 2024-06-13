import React from "react";
import Dashboard from "./Dashboard.jsx";
import Classes from "./Classes.jsx";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "./Profile.jsx";
import { Grid, List, User } from "react-native-feather";
import { theme } from "../../Colors";

const TopTab = createMaterialTopTabNavigator();

const CoachScreen = () => {
	return (
		<TopTab.Navigator
			initialRouteName="Dashboard"
			backBehavior="history"
			tabBarPosition="bottom"
			screenOptions={{
				tabBarActiveTintColor: "white",
				tabBarInactiveTintColor: "darkgray",
				tabBarStyle: { backgroundColor: theme === "dark" ? "black" : "white" },
			}}
		>
			<TopTab.Screen
				name="Dashboard"
				component={Dashboard}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? "white" : "darkgray";
						return <Grid color={col} />;
					},
				})}
			/>
			<TopTab.Screen
				name="Classes"
				component={Classes}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? "white" : "darkgray";
						return <List color={col} />;
					},
				})}
			/>
			<TopTab.Screen
				name="Profile"
				component={Profile}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? "white" : "darkgray";
						return <User color={col} />;
					},
				})}
			/>
		</TopTab.Navigator>
	);
};

export default CoachScreen;
