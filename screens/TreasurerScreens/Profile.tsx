import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { userURI } from "../../globalRoutes";
import Loading from "../../Customs/Loading";

interface ProfileProps {
	navigation: any;
}

const Profile: React.FC<ProfileProps> = () => {
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});

	const fetchUserInfo = async () => {
		try {
			const id = await AsyncStorage.getItem("id");
			if (!id) {
				console.log("User ID not found in AsyncStorage.");
			}
			const response = await axios.get(`${userURI}/${id}`);
			setUserInfo(response.data);
		} catch (error: any) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		fetchUserInfo();
	}, []);

	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.MainText}>Profile Screen</Text>
			{userInfo.name.length > 0 ? (
				<View>
					<Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
					<Text style={Styles.MainSubText}>Username: {userInfo.name}</Text>
					<Text style={Styles.MainSubText}>
						Phone Number: {userInfo.phoneNumber}
					</Text>
				</View>
			) : (
				<Loading />
			)}
		</View>
	);
};

export default Profile;
