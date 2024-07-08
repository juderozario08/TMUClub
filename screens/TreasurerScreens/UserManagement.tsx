import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserDashboard from "./UserDashboard";
import { backgroundColor, headerTitleColor, theme } from "../../Colors";
import { Menu } from "react-native-feather";
import { Pressable } from "react-native";
import UserRoleManagement from "./UserRoleManagement";
import { SetRole } from "../../Globals/AppValues";

const Drawer = createDrawerNavigator();

const UserManagement = () => {
    const handleNavigation = (name) => {
        SetRole(name);
    };
    return (
        <Drawer.Navigator
            initialRouteName={"User Dashboard"}
            screenOptions={({ navigation }) => ({
                headerTitleStyle: {
                    color: headerTitleColor,
                    fontWeight: "bold",
                    fontSize: 20,
                    top: 2.5,
                },
                headerStyle: {
                    backgroundColor: backgroundColor,
                },
                headerLeft: () => (
                    <Pressable
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                        style={{ marginLeft: 20 }}
                    >
                        <Menu color={headerTitleColor} />
                    </Pressable>
                ),
                drawerStyle: {
                    backgroundColor: backgroundColor,
                    borderTopColor: "gray",
                    borderRightColor: "gray",
                    borderWidth: 1,
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
                },
                drawerLabelStyle: { color: headerTitleColor },
                drawerType: "front",
                drawerStatusBarAnimation: "fade",
                swipeEnabled: true,
            })}
        >
            <Drawer.Screen name={"User Dashboard"} component={UserDashboard} />
            <Drawer.Screen
                name={"Member Management"}
                component={UserRoleManagement}
                options={{}}
            />
            <Drawer.Screen name={"Coach Management"} component={UserRoleManagement} />
            <Drawer.Screen
                name={"Trasurer Management"}
                component={UserRoleManagement}
            />
        </Drawer.Navigator>
    );
};

export default UserManagement;
