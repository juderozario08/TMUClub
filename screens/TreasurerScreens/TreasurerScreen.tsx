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
import Profile from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClassManagement from "./ClassManagement/ClassManagement";
import axios from "axios";
import { classURI, paymentURI, userURI, usersURI } from "../../globalRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../Customs/Loading";
import { View } from "react-native";

const BottomTab = createBottomTabNavigator();

const TreasurerScreen = () => {
    const [allMembers, setAllMembers] = useState<any[]>([]);
    const [allCoaches, setAllCoaches] = useState<any[]>([]);
    const [allTreasurers, setAllTreasurers] = useState<any[]>([]);
    const [allClasses, setAllClasses] = useState<any[]>([]);
    const [allPayments, setAllPayments] = useState<any[]>([]);
    const [user, setUser] = useState<any>({
        id: "" as string,
        name: "" as string,
        email: "" as string,
        phoneNumber: "" as string,
        classes: [] as any[],
        balance: 0 as number,
        role: "" as string,
    });
    const isLoading = (): boolean => {
        return !(
            (allMembers.length > 0 ||
                allCoaches.length > 0 ||
                allTreasurers.length > 0) &&
            user.name.length > 0
        );
    };

    const fetchAllUsers = async () => {
        await axios
            .get(`${usersURI}`)
            .then((res: any) => {
                setAllMembers(res.data.members);
                setAllCoaches(res.data.coaches);
                setAllTreasurers(res.data.treasurers);
            })
            .catch((err: any) => {
                console.log(err.message);
            });
    };

    const fetchUserInfo = async () => {
        try {
            const id = await AsyncStorage.getItem("id");
            if (!id) {
                console.log("User ID not found in AsyncStorage.");
            }
            const response = await axios.get(`${userURI}/${id}`);
            setUser(response.data);
        } catch (error: any) {
            console.error(error.message);
        }
    };

    const fetchAllPayments = async () => {
        await axios
            .get(`${paymentURI}`)
            .then((res: any) => {
                setAllPayments(res.data);
            })
            .catch((err: any) => {
                console.log(err.message);
            });
        console.log("Getting all payments");
    };

    const fetchAllClasses = async () => {
        await axios
            .get(`${classURI}`)
            .then((res: any) => {
                setAllClasses(res.data);
            })
            .catch((err: any) => {
                console.log(err.message);
            });
        console.log("Getting all classes");
    };

    useEffect(() => {
        fetchAllUsers();
        fetchUserInfo();
        fetchAllPayments();
        fetchAllClasses();
    }, []);

    return isLoading() ? (
        <View style={Styles.MainContainer}>
            <Loading />
        </View>
    ) : (
        <BottomTab.Navigator
            initialRouteName="Dashboard"
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
                name="Dashboard"
                initialParams={{
                    user: user,
                    payments: allPayments,
                    classes: allClasses,
                }}
                component={Dashboard}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? tabColor : "darkgray";
                        return <Grid color={col} />;
                    },
                    title: "Welcome " + user.name.split(" ")[0] + ",",
                })}
            />
            <BottomTab.Screen
                name="Classes"
                component={ClassManagement}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? tabColor : "darkgray";
                        return <Layers color={col} />;
                    },
                })}
            />
            <BottomTab.Screen
                name="User Management"
                component={UserManagement}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const col = focused ? tabColor : "darkgray";
                        return <Users color={col} />;
                    },
                })}
            />
            <BottomTab.Screen
                name="Profile"
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
