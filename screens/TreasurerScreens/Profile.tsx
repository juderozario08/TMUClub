import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { userURI } from "../../globalRoutes";
import { setUserInfo, userInfo } from "../../globalDBValues";

interface ProfileProps {
	navigation: any;
}
const Profile: React.FC<ProfileProps> = ({ navigation }) => {
	return userInfo.name ? (
		<View style={Styles.MainContainer}>
			<Text style={Styles.MainText}>Profile Screen</Text>
			<View>
				<Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
				<Text style={Styles.MainSubText}>Username: {userInfo.name}</Text>
				<Text style={Styles.MainSubText}>
					Phone-Number: {userInfo.phoneNumber}
				</Text>
			</View>
		</View>
	) : (
		<View style={Styles.MainContainer}>
			<Text style={[Styles.WelcomeText]}>Is Loading</Text>
		</View>
	);
};

export default Profile;
