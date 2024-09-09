import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../../Colors";
import UserList from "../../Customs/UserList";
import { DefaultParamList, UserType } from "../../Customs/Types";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useFocusEffect } from "@react-navigation/native";
import { RoleBasedChange, SetRoleBasedChange } from "../../Globals/Functions";
import { FetchUsersByRole } from "../../Globals/FetchFunctions";
import { ROLE } from "../../Customs/Enums";

type UserManagementNavType = DrawerNavigationProp<DefaultParamList>;

interface UserManagementProps {
    navigation: UserManagementNavType;
    route: any;
}

const UserRoleManagement: React.FC<UserManagementProps> = ({
    navigation,
    route,
}) => {
    const role: string = route.params?.role;

    const [allUsers, setAllUsers] = useState<UserType[]>([]);

    useEffect(() => {
        FetchUsersByRole(setAllUsers, role || ROLE.MEMBER);
    }, []);

    useFocusEffect(() => {
        if (RoleBasedChange) {
            FetchUsersByRole(setAllUsers, role || ROLE.MEMBER);
            SetRoleBasedChange(false);
        }
    });

    return (
        <SafeAreaView
            style={[
                Styles.MainContainer,
                { alignItems: "stretch", paddingTop: 0, paddingBottom: 20 },
            ]}
        >
            <ScrollView contentContainerStyle={Styles.CardsContainer}>
                <UserList
                    users={allUsers}
                    setUsers={setAllUsers}
                    none_found={
                        role === "member"
                            ? "Members"
                            : role === "coach"
                                ? "Coaches"
                                : "Treasurers"
                    }
                />
            </ScrollView>
            <Pressable
                style={[Styles.SubmitButton, { marginTop: -5 }]}
                onPress={() => {
                    navigation
                        .getParent()
                        ?.getParent()
                        ?.navigate(
                            (role[0].toUpperCase() + role.slice(1) + "Add") as never,
                        );
                }}
            >
                <Text style={Styles.SubmitButtonText}>Add User</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default UserRoleManagement;
