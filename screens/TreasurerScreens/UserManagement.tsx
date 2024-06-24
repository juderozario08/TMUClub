import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MemberManagement from "./MemberManagement/MemberManagement";
import CoachManagement from "./CoachManagement/CoachManagement";
import TreasurerManagement from "./TreasurerManagement/TreasurerManagement";
import UserDashboard from "./UserDashboard";
import { backgroundColor, headerTitleColor, theme } from "../../Colors";

const Drawer = createDrawerNavigator();

const UserManagement = () => (
	<Drawer.Navigator
		initialRouteName={"User Dashboard"}
		screenOptions={{
			headerTitleStyle: {
				color: headerTitleColor,
				fontWeight: "bold",
				fontSize: 20,
			},
			headerStyle: {
				backgroundColor: backgroundColor,
			},
			drawerStyle: {
				backgroundColor: backgroundColor,
				borderTopColor: theme === "dark" ? "white" : "black",
				borderRightColor: theme === "dark" ? "white" : "black",
				borderBottomColor: theme === "dark" ? "white" : "black",
				borderWidth: 1,
				borderTopRightRadius: 50,
				borderBottomRightRadius: 50,
				margin: 0,
				padding: 0,
			},
			drawerItemStyle: {
				borderTopColor: theme === "dark" ? "white" : "black",
				borderTopWidth: 1,
				borderBottomColor: theme === "dark" ? "white" : "black",
				borderBottomWidth: 1,
				borderLeftWidth: 0,
				borderRightWidth: 0,
				width: "100%",
				alignItems: "stretch",
			},
			drawerLabelStyle: { color: headerTitleColor },
			drawerType: "front",
		}}
	>
		<Drawer.Screen name={"User Dashboard"} component={UserDashboard} />
		<Drawer.Screen name={"Member Management"} component={MemberManagement} />
		<Drawer.Screen name={"Coach Management"} component={CoachManagement} />
		<Drawer.Screen
			name={"Trasurer Management"}
			component={TreasurerManagement}
		/>
	</Drawer.Navigator>
);

export default UserManagement;
