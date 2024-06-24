import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../../../Colors";
import axios from "axios";
import { userRoleURI } from "../../../globalRoutes";
import UserList from "../../../Customs/UserList";

interface MemberManagementHomeProps {
	navigation: any;
}

const MemberManagementHome: React.FC<MemberManagementHomeProps> = ({
	navigation,
}): React.JSX.Element => {
	const [allMembers, setAllMembers] = useState<any[]>([]);
	const fetchAllMembers = async () => {
		try {
			const res = await axios.get(`${userRoleURI}/member`);
			setAllMembers(res.data);
		} catch (err: any) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		fetchAllMembers();
	}, []);
	return (
		<View style={Styles.MainContainer}>
			<Text style={[Styles.MainText, { paddingVertical: 10 }]}>Members</Text>
			<UserList users={allMembers} navigation={navigation} />
		</View>
	);
};

export default MemberManagementHome;
