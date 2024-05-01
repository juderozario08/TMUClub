import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home.jsx";

const Tab = createBottomTabNavigator();

const MemberScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "darkgray",
                tabBarStyle: { backgroundColor: "black" },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
};

export default MemberScreen;
