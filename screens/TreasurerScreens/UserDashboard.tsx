import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Styles } from "../../Colors";
import axios from "axios";
import { userURI } from "../../globalRoutes";
import UserListCard from "../../Customs/UserList";

interface UserDashboardProps {
	navigation: any;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ navigation }) => {
	const [allMembers, setAllMembers] = useState<any[]>([]);
	const [allCoaches, setAllCoaches] = useState<any[]>([]);
	const [allTreasurers, setAllTreasurers] = useState<any[]>([]);

	const fetchAllUsers = async () => {
		try {
			const allRoles = await axios.get(`${userURI}/allRoles`);
			setAllMembers(allRoles.data.members);
			setAllCoaches(allRoles.data.coaches);
			setAllTreasurers(allRoles.data.treasurers);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchAllUsers();
	}, []);

	return (
		<SafeAreaView style={[Styles.MainContainer, { alignItems: "stretch" }]}>
			<ScrollView contentContainerStyle={[Styles.CardsContainer]}>
				<Text style={[Styles.MainText, { width: "100%" }]}>Members</Text>
				<UserListCard users={allMembers} navigation={navigation}></UserListCard>
				<Text style={[Styles.MainText, { width: "100%" }]}>Coaches</Text>
				<UserListCard users={allCoaches} navigation={navigation}></UserListCard>
				<Text style={[Styles.MainText, { width: "100%" }]}>Treasurers</Text>
				<UserListCard
					users={allTreasurers}
					navigation={navigation}
				></UserListCard>
			</ScrollView>
		</SafeAreaView>
	);
};

export default UserDashboard;
