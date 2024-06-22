import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MemberManagement from "./MemberManagement/MemberManagement";
import CoachManagement from "./CoachManagement/CoachManagement";
import TreasurerManagement from "./TreasurerManagement/TreasurerManagement";
import UserDashboard from "./UserDashboard";
import { backgroundColor, headerTitleColor } from "../../Colors";

const Drawer = createDrawerNavigator();

const UserManagement = () => {
	return (
		<Drawer.Navigator
			initialRouteName={"User Dashboard"}
			screenOptions={{
				headerTransparent: true,
				headerTitleStyle: {
					color: headerTitleColor,
					fontWeight: "bold",
					fontSize: 20,
				},
				drawerStyle: { backgroundColor: backgroundColor },
				drawerLabelStyle: { color: headerTitleColor },
				drawerType: "front",
				swipeEnabled: true,
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
};

export default UserManagement;
