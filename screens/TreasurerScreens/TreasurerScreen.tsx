import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Grid, Layers, User, Users } from "react-native-feather";
import { backgroundColor, tabColor } from "../../Colors";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import ClassManagement from "./Classes";
import { fetchUserInfo, fetchUsers } from "../../globalDBValues";
import Profile from "./Profile";

const TopTab = createMaterialTopTabNavigator();

const TreasurerScreen = () => {
	useEffect(() => {
		fetchUserInfo();
		fetchUsers();
	}, []);

	return (
		<TopTab.Navigator
			initialRouteName="Dashboard"
			backBehavior="history"
			tabBarPosition="bottom"
			screenOptions={{
				tabBarActiveTintColor: tabColor,
				tabBarInactiveTintColor: "darkgray",
				tabBarStyle: { backgroundColor: backgroundColor },
				tabBarLabel: () => {
					return null;
				},
			}}
		>
			<TopTab.Screen
				name="Dashboard"
				component={Dashboard}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <Grid color={col} />;
					},
				})}
			/>
			<TopTab.Screen
				name="Classes"
				component={ClassManagement}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <Layers color={col} />;
					},
				})}
			/>
			<TopTab.Screen
				name="User Management"
				component={UserManagement}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <Users color={col} />;
					},
				})}
			/>
			<TopTab.Screen
				name="Profile"
				component={Profile}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <User color={col} />;
					},
				})}
			/>
		</TopTab.Navigator>
	);
};

export default TreasurerScreen;
