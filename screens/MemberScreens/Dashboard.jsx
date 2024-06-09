import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Styles } from "../../Colors.js";
import axios from "axios";
import { userURI } from "../../globalRoutes.js";

const Dashboard = () => {
	const [userInfo, setUserInfo] = useState(null);

	const fetchUserInfo = async () => {
		try {
			const id = await AsyncStorage.getItem("id");
			if (!id) {
				console.log("User ID not found in AsyncStorage.");
			}
			const response = await axios.get(`${userURI}/${id}`);
			setUserInfo(response.data);
		} catch (error) {
			console.error(error.message);
		}
	};
	useEffect(() => {
		fetchUserInfo();
	}, []);

	return (
		<SafeAreaView style={Styles.WelcomeText}>
			{userInfo ? (
				<View style={{ flex: 1 }}>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							color: "white",
							marginTop: "13%",
							marginLeft: "8%",
						}}
					>
						Welcome {userInfo.name},
					</Text>
					<View style={Styles.MainContainer}>
						<Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
						<Text style={Styles.MainSubText}>
							Email: {userInfo.phoneNumber}
						</Text>
					</View>
				</View>
			) : (
				<Text style={Styles.MainText}>Loading user information...</Text>
			)}
		</SafeAreaView>
	);
};

export default Dashboard;
