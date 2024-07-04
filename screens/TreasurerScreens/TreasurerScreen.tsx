import React, { useEffect, useState } from "react";
import { Grid, Layers, User, Users } from "react-native-feather";
import { backgroundColor, headerTitleColor, tabColor } from "../../Colors";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import Profile from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClassManagement from "./ClassManagement/ClassManagement";

const BottomTab = createBottomTabNavigator();

const TreasurerScreen = () => {
	return (
		<BottomTab.Navigator
			initialRouteName={"Dashboard"}
			backBehavior="history"
			screenOptions={{
				headerTitleStyle: {
					color: headerTitleColor,
					fontWeight: "bold",
					fontSize: 30,
				},
				headerStyle: {
					backgroundColor: backgroundColor,
					height: 120,
				},
				headerTitleAlign: "left",
				tabBarActiveTintColor: tabColor,
				tabBarInactiveTintColor: "darkgray",
				tabBarStyle: { backgroundColor: backgroundColor },
				tabBarLabel: () => {
					return null;
				},
			}}
		>
			<BottomTab.Screen
				name={"Dashboard"}
				component={Dashboard}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <Grid color={col} />;
					},
				})}
			/>
			<BottomTab.Screen
				name={"Classes"}
				component={ClassManagement}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <Layers color={col} />;
					},
				})}
			/>
			<BottomTab.Screen
				name={"User Management"}
				component={UserManagement}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <Users color={col} />;
					},
					headerShown: false,
				})}
			/>
			<BottomTab.Screen
				name={"Profile"}
				component={Profile}
				options={() => ({
					tabBarIcon: ({ focused }) => {
						const col = focused ? tabColor : "darkgray";
						return <User color={col} />;
					},
				})}
			/>
		</BottomTab.Navigator>
	);
};

export default TreasurerScreen;
