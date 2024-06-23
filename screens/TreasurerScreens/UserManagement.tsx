import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MemberManagement from "./MemberManagement/MemberManagement";
import CoachManagement from "./CoachManagement/CoachManagement";
import TreasurerManagement from "./TreasurerManagement/TreasurerManagement";
import UserDashboard from "./UserDashboard";
import { backgroundColor, headerTitleColor } from "../../Colors";
import { XCircle } from "react-native-feather";

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
				borderTopColor: "white",
				borderRightColor: "white",
				borderBottomColor: "white",
				borderWidth: 1,
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
