import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../../Colors";
import UserList from "../../Customs/UserList";
import Loading from "../../Customs/Loading";
import { FetchAllUsers } from "../../Globals/FetchFunctions";
import { UserType } from "../../Customs/Types";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ROLE } from "../../Customs/Enums";
import { useFocusEffect } from "@react-navigation/native";
import { DashboardChange, SetDashboardChange } from "../../Globals/Functions";

type RootStackParamList = {};
type UserDashboardType = DrawerNavigationProp<RootStackParamList>;

interface UserDashboardProps {
    navigation: UserDashboardType;
}

const UserDashboard: React.FC<UserDashboardProps> = () => {
    const [allMembers, setAllMembers] = useState<UserType[]>([]);
    const [allCoaches, setAllCoaches] = useState<UserType[]>([]);
    const [allTreasurers, setAllTreasurers] = useState<UserType[]>([]);

    useFocusEffect(() => {
        if (
            (allMembers.length === 0 &&
                allCoaches.length === 0 &&
                allTreasurers.length === 0) ||
            DashboardChange
        ) {
            FetchAllUsers(setAllMembers, setAllCoaches, setAllTreasurers);
            SetDashboardChange(false);
        }
    });

    return (
        <SafeAreaView
            style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
        >
            {allMembers || allCoaches || allTreasurers ? (
                <ScrollView contentContainerStyle={[Styles.CardsContainer]}>
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Members
                    </Text>
                    <UserList
                        users={allMembers}
                        none_found={"members"}
                        setUsers={setAllMembers}
                        role={ROLE.MEMBER}
                    />
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Coaches
                    </Text>
                    <UserList
                        users={allCoaches}
                        none_found={"coaches"}
                        setUsers={setAllCoaches}
                    />
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Treasurers
                    </Text>
                    <UserList
                        users={allTreasurers}
                        none_found={"treasurers"}
                        setUsers={setAllTreasurers}
                    />
                </ScrollView>
            ) : (
                <Loading />
            )}
        </SafeAreaView>
    );
};

export default UserDashboard;
