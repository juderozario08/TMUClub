import React from "react";
import Dashboard from "./Dashboard.jsx";
import Classes from "./Classes.jsx";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "./Profile.jsx";
import { Grid, Home, List } from "react-native-feather";

const TopTab = createMaterialTopTabNavigator();

const MemberScreen = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Dashboard"
      backBehavior="history"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "darkgray",
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <TopTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            const col = focused ? "white" : "darkgray";
            return <Grid color={col} />;
          },
        })}
      />
      <TopTab.Screen
        name="Classes"
        component={Classes}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            const col = focused ? "white" : "darkgray";
            return <List color={col} />;
          },
        })}
      />
      <TopTab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            const col = focused ? "white" : "darkgray";
            return <Home color={col} />;
          },
        })}
      />
    </TopTab.Navigator>
  );
};

export default MemberScreen;