import React from "react";
import Dashboard from "./Dashboard";
import Classes from "./Classes";
import Profile from "../Profile";
import { Grid, List, User } from "react-native-feather";
import { theme } from "../../Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const CoachNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Dashboard"
            backBehavior="history"
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "darkgray",
                tabBarStyle: { backgroundColor: theme === "dark" ? "black" : "white" },
            }}
        >
            <BottomTab.Screen
                name="Dashboard"
                component={Dashboard}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? "white" : "darkgray";
                        return <Grid color={col} />;
                    },
                })}
            />
            <BottomTab.Screen
                name="Classes"
                component={Classes}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? "white" : "darkgray";
                        return <List color={col} />;
                    },
                })}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? "white" : "darkgray";
                        return <User color={col} />;
                    },
                })}
            />
        </BottomTab.Navigator>
    );
};

export default CoachNavigator;
