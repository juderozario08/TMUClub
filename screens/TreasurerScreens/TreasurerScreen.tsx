import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Grid, Layers, User, Users } from "react-native-feather";
import { backgroundColor, tabColor } from "../../Colors";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import ClassManagement from "./Classes";
import axios from "axios";
import { userURI } from "../../globalRoutes";
import {
	allCoaches,
	allMembers,
	allTreasurers,
	setUserInfo,
} from "../../globalDBValues";
import Profile from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopTab = createMaterialTopTabNavigator();

const TreasurerScreen = () => {
	const fetchUsers = async () => {
		const res = await axios.get(`${userURI}`);
		for (let i = 0; i < res.data.length; i++) {
			if (res.data[i].role === "member") {
				allMembers.push(res.data[i]);
			} else if (res.data[i].role === "coach") {
				allCoaches.push(res.data[i]);
			} else if (res.data[i].role === "treasurer") {
				allTreasurers.push(res.data[i]);
			}
		}
	};

	const fetchUserInfo = async () => {
		try {
			const id = await AsyncStorage.getItem("id");
			if (!id) console.error("User ID not found in AsyncStorage.");
			const response = await axios.get(`${userURI}/${id}`);
			setUserInfo(response.data);
		} catch (error: any) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		fetchUsers();
		fetchUserInfo();
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
