import React, { useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../Colors";
import axios from "axios";
import { userURI } from "../../globalRoutes";

const UserDashboard = () => {
	const allMembers = useRef<any[]>([]);
	const allCoaches = useRef<any[]>([]);
	const allTreasurers = useRef<any[]>([]);

	const fetchAllUsers = async () => {
		try {
			const res = await axios.get(`${userURI}`);
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i].role === "member") allMembers.current.push(res.data[i]);
				else if (res.data[i].role === "coach")
					allCoaches.current.push(res.data[i]);
				else if (res.data[i].role === "treasurer")
					allTreasurers.current.push(res.data[i]);
			}
		} catch (err: any) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchAllUsers();
	}, []);

	return (
		<View style={Styles.MainContainer}>
			<ScrollView contentContainerStyle={[Styles.CardsContainer]}>
				<Text style={[Styles.MainText, { width: "100%" }]}>Members</Text>
				{allMembers ? (
					allMembers.current.map((el: any, index: number) => (
						<View key={index} style={[Styles.Cards]}>
							<View style={{ padding: 10 }}>
								<Text style={Styles.CardsText}>Name: {el.name}</Text>
								<Text style={Styles.CardsText}>Email: {el.email}</Text>
							</View>
						</View>
					))
				) : (
					<Text style={Styles.MainSubText}>Loading...</Text>
				)}
				<Text style={[Styles.MainText, { width: "100%" }]}>Coaches</Text>
				{allCoaches.current.map((el, index) => (
					<View key={index} style={[Styles.Cards]}>
						<View style={{ padding: 10 }}>
							<Text style={Styles.CardsText}>Name: {el.name}</Text>
							<Text style={Styles.CardsText}>Email: {el.email}</Text>
						</View>
					</View>
				))}
				<Text style={[Styles.MainText, { width: "100%" }]}>Treasurers</Text>
				{allTreasurers.current.map((el, index) => (
					<View key={index} style={[Styles.Cards]}>
						<View style={{ padding: 10 }}>
							<Text style={Styles.CardsText}>Name: {el.name}</Text>
							<Text style={Styles.CardsText}>Email: {el.email}</Text>
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default UserDashboard;
