import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../../Colors";
import UserListCard from "../../Customs/UserList";
import Loading from "../../Customs/Loading";
import { FetchAllUsers } from "../../Globals/FetchFunctions";
import { UserType } from "../../Customs/Types";
import { AllCoaches, AllMembers, AllTreasurers } from "../../Globals/AppValues";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootStackParamList = {};
type UserDashboardType = DrawerNavigationProp<RootStackParamList>;

interface UserDashboardProps {
    navigation: UserDashboardType;
}

const UserDashboard: React.FC<UserDashboardProps> = () => {
    const [allMembers, setAllMembers] = useState<UserType[]>(AllMembers);
    const [allCoaches, setAllCoaches] = useState<UserType[]>(AllCoaches);
    const [allTreasurers, setAllTreasurers] = useState<UserType[]>(AllTreasurers);

    useEffect(() => {
        if (
            allMembers.length === 0 &&
            allCoaches.length === 0 &&
            allTreasurers.length === 0
        )
            FetchAllUsers(setAllMembers, setAllCoaches, setAllTreasurers);
    }, []);

    return (
        <SafeAreaView
            style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
        >
            {allMembers || allCoaches || allTreasurers ? (
                <ScrollView contentContainerStyle={[Styles.CardsContainer]}>
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Members
                    </Text>
                    <UserListCard
                        users={allMembers}
                        none_found={"members"}
                        setUsers={setAllMembers}
                    />
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Coaches
                    </Text>
                    <UserListCard
                        users={allCoaches}
                        none_found={"coaches"}
                        setUsers={setAllCoaches}
                    />
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Treasurers
                    </Text>
                    <UserListCard
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
