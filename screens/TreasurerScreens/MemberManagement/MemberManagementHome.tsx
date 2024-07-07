import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Styles } from "../../../Colors";
import UserList from "../../../Customs/UserList";
import { FetchMembers } from "../../../Globals/FetchFunctions";
import { UserType } from "../../../Customs/Types";
import { AllMembers } from "../../../Globals/AppValues";

interface MemberManagementHomeProps {
	navigation: any;
}

const MemberManagementHome: React.FC<MemberManagementHomeProps> = ({
	navigation,
}): React.JSX.Element => {
	const [allMembers, setAllMembers] = useState<UserType[]>(AllMembers);
	useEffect(() => {
		if (allMembers.length === 0) FetchMembers(setAllMembers);
	}, []);
	return (
		<SafeAreaView
			style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
		>
			<UserList
				users={allMembers}
				navigation={navigation}
				setUsers={undefined}
				none_found={""}
			/>
			<Pressable style={Styles.SubmitButton} onPress={() => {navigation.navigate("Member Add")}}>
				<Text style={Styles.SubmitButtonText}>Add Member</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default MemberManagementHome;
