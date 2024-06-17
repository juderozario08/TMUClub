import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../Colors";
import { signUpURI, userURI } from "../../globalRoutes";
import axios from "axios";

const MemberManagement = () => {
	const addMember = async () => {
		axios
			.post(`${signUpURI}/member`, {
				name: "apsijf",
				email: "pijgd@mail.com",
				password: "Anyone123!",
				phoneNumber: "1234567890",
				balance: 50,
				classes: [],
			})
			.then((res) => {
				Alert.alert("User created successfully.");
				console.log(res.data);
				fetchUsers();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	const fetchUsers = async () => {
		axios
			.get(userURI)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.MainText}>Member Management</Text>
			<TouchableOpacity style={Styles.SubmitButton} onPress={addMember}>
				<Text style={Styles.SubmitButtonText}>Add Member</Text>
			</TouchableOpacity>
			<TouchableOpacity style={Styles.SubmitButton}>
				<Text style={Styles.SubmitButtonText}>Change Member</Text>
			</TouchableOpacity>
			<TouchableOpacity style={Styles.SubmitButton}>
				<Text style={Styles.SubmitButtonText}>Delete Member</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MemberManagement;
