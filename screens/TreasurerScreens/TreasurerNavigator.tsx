import React, { useEffect, useState } from "react";
import { Grid, Layers, User, Users } from "react-native-feather";
import {
    Styles,
    backgroundColor,
    headerTitleColor,
    tabColor,
} from "../../Colors";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import Profile from "../Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClassManagement from "./ClassManagement/ClassManagement";
import { UserType } from "../../Customs/Types";
import { UserInfo } from "../../Globals/AppValues";
import { FetchUser } from "../../Globals/FetchFunctions";
import { View } from "react-native";
import Loading from "../../Customs/Loading";

const BottomTab = createBottomTabNavigator();

const TreasurerNavigator = () => {
    const [user, setUser] = useState<UserType>(UserInfo);
    useEffect(() => {
        if (user.name.length === 0) FetchUser(setUser);
    }, []);
    return user.name.length === 0 ? (
        <View style={Styles.MainContainer}>
            <Loading />
        </View>
    ) : (
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
                tabBarLabel: () => null,
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
                    title: "Welcome, " + user.name.split(" ")[0],
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

export default TreasurerNavigator;
