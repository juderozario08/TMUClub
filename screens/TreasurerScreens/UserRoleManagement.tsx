import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { Styles } from "../../Colors";
import UserList from "../../Customs/UserList";
import { DefaultParamList, DrawerNavType, UserType } from "../../Customs/Types";
import { GetUsersByRole } from "../../Globals/AppValues";
import { FetchUsers } from "../../Globals/FetchFunctions";
import { DrawerNavigationProp } from "@react-navigation/drawer";

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

	useEffect(() => {
		if (allUsers.length === 0) FetchUsers(setAllUsers, route.params.role);
	}, []);

	return (
		<SafeAreaView
			style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
		>
			<UserList users={allUsers} setUsers={undefined} none_found={""} />
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
		</SafeAreaView>
	);
};

export default UserRoleManagement;
