import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../../Colors";
import UserList from "../../Customs/UserList";
import { DefaultParamList, DrawerNavType, UserType } from "../../Customs/Types";
import { GetUsersByRole, SetUsersByRole } from "../../Globals/AppValues";
import { FetchUsers } from "../../Globals/FetchFunctions";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useFocusEffect } from "@react-navigation/native";

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

	const [allUsers, setAllUsers] = useState<UserType[]>(GetUsersByRole(role));

	useFocusEffect(() => {
		if (allUsers.length === 0) FetchUsers(setAllUsers, route.params.role);
		setAllUsers(GetUsersByRole(role));
	});

	return (
		<SafeAreaView
			style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
		>
			<ScrollView contentContainerStyle={Styles.CardsContainer}>
				<UserList
					users={allUsers}
					setUsers={setAllUsers}
					none_found={"No Members Yet"}
				/>
				<Pressable
					style={[Styles.SubmitButton, { paddingBottom: 10 }]}
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
			</ScrollView>
		</SafeAreaView>
	);
};

export default UserRoleManagement;
