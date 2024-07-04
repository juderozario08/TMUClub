import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../../Colors";
import axios from "axios";
import { UsersURI } from "../../Globals/Routes";
import UserListCard from "../../Customs/UserList";
import Loading from "../../Customs/Loading";

interface UserDashboardProps {
    navigation: any;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ navigation, route }) => {
    const [allMembers, setAllMembers] = useState<any[]>([]);
    const [allCoaches, setAllCoaches] = useState<any[]>([]);
    const [allTreasurers, setAllTreasurers] = useState<any[]>([]);
    const fetchAllUsers = async () => {
        await axios
            .get(`${UsersURI}`)
            .then((res: any) => {
                setAllMembers(res.data.members);
                setAllCoaches(res.data.coaches);
                setAllTreasurers(res.data.treasurers);
            })
            .catch((err: any) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        fetchAllUsers();
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
                        navigation={navigation}
                        none_found={"members"}
                        setUsers={setAllMembers}
                    />
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Coaches
                    </Text>
                    <UserListCard
                        users={allCoaches}
                        navigation={navigation}
                        none_found={"coaches"}
                        setUsers={setAllCoaches}
                    />
                    <Text style={[Styles.MainText, { paddingVertical: 20 }]}>
                        Treasurers
                    </Text>
                    <UserListCard
                        users={allTreasurers}
                        navigation={navigation}
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
