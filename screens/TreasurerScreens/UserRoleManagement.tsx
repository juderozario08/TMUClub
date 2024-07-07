import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { Styles } from "../../Colors";
import UserList from "../../Customs/UserList";
import { UserType } from "../../Customs/Types";
import { AllCoaches, AllMembers, AllTreasurers } from "../../Globals/AppValues";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { FetchUsers } from "../../Globals/FetchFunctions";

type RootDrawerParamList = {
    "Member Management": { role: string };
    "Coach Management": { role: string };
    "Trasurer Management": { role: string };
};

type UserManagementRouteProp = RouteProp<
    RootDrawerParamList,
    "Member Management" | "Coach Management" | "Trasurer Management"
>;

type UserManagementNavigationProp = DrawerNavigationProp<
    RootDrawerParamList,
    "Member Management" | "Coach Management" | "Trasurer Management"
>;

interface UserManagementProps {
    navigation: UserManagementNavigationProp;
}

const UserRoleManagement: React.FC<UserManagementProps> = () => {
    const router = useRoute<UserManagementRouteProp>();
    const role = router.params?.role;

    const getGlobalUsers = (): UserType[] => {
        if (role === "member") return AllMembers;
        else if (role === "coach") return AllCoaches;
        else if (role === "treasurer") return AllTreasurers;
        else return [];
    };

    const [allUsers, setAllUsers] = useState<UserType[]>(getGlobalUsers());

    useEffect(() => {
        if (allUsers.length === 0) FetchUsers(setAllUsers, role);
    }, []);

    return (
        <SafeAreaView
            style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
        >
            <UserList users={allUsers} setUsers={undefined} none_found={""} />
            <Pressable style={Styles.SubmitButton} onPress={() => { }}>
                <Text style={Styles.SubmitButtonText}>Add User</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default UserRoleManagement;
