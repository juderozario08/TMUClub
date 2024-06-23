import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Grid, Layers, User, Users } from "react-native-feather";
import { backgroundColor, tabColor } from "../../Colors";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import ClassManagement from "./Classes";
import {
	allCoaches,
	allMembers,
	allTreasurers,
	allUsers,
} from "../../globalDBValues";
import Profile from "./Profile";
import axios from "axios";
import { userURI } from "../../globalRoutes";

const TopTab = createMaterialTopTabNavigator();

const TreasurerScreen = () => {
	const fetchAllUsers = async () => {
		const res = await axios.get(`${userURI}`);
		for (let i = 0; i < res.data.length; i++) {
			allUsers.push(res.data[i]);
			if (res.data[i].role === "member") {
				allMembers.push(res.data[i]);
			} else if (res.data[i].role === "coach") {
				allCoaches.push(res.data[i]);
			} else if (res.data[i].role === "treasurer") {
				allTreasurers.push(res.data[i]);
			}
		}
	};

	useEffect(() => {
		fetchAllUsers();
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
