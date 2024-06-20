import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Activity, Grid, List, User, Users } from "react-native-feather";
import { tabColor, theme } from "../../Colors";
import Dashboard from "./Dashboard";
import CoachManagement from "./CoachManagement";
import Profile from "./Profile";
import MemberManagement from "./MemberManagement";
import ClassManagement from "./Classes";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

const TreasurerScreen = () => {
    return (
        <TopTab.Navigator
            initialRouteName="Dashboard"
            backBehavior="history"
            tabBarPosition="bottom"
            screenOptions={{
                tabBarActiveTintColor: theme === "dark" ? "white" : "black",
                tabBarInactiveTintColor: "darkgray",
                tabBarStyle: { backgroundColor: theme === "dark" ? "black" : "white" },
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
                        return <List color={col} />;
                    },
                })}
            />
            <TopTab.Screen
                name="User Management"
                component={CoachManagement}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? tabColor : "darkgray";
                        return <Activity color={col} />;
                    },
                })}
            />
            <TopTab.Screen
                name="Member Management"
                component={MemberManagement}
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
