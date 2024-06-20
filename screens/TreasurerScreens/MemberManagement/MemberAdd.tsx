import React, { useState } from "react";
import { Alert, Modal, Text, TextInput, View } from "react-native";
import { Styles } from "../../../Colors";
import { signUpURI, userURI } from "../../../globalRoutes";
import axios from "axios";
import { allMembers, allCoaches, allTreasurers } from "../../../globalDBValues";
import { TouchableOpacity } from "react-native-gesture-handler";

interface MemberAddProps {
	navigation: any;
}

const MemberAdd: React.FC<MemberAddProps> = ({
	navigation,
}): React.JSX.Element => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		phoneNumber: "",
		balance: 0,
		classes: [],
	});
	const [isModalVisible, setModalVisible] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (tag: string, value: number | string) => {
		setUser({
			...user,
			[tag]: value,
		});
	};

	const addMember = async () => {
		try {
			const res = await axios.post(`${signUpURI}/member`, user);
			console.log("User added", res.data);
			Alert.alert(`The user: "${user.name}" has been added successfully.`);
			allMembers.push(res.data);
		} catch (err: any) {
			setError(err.message);
		}
	};

	const addAnother = (val: boolean) =>
		!val ? navigation.navigate("MemberID Home") : setModalVisible(true);

	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.WelcomeText}>Add User</Text>
			<View>
				<View style={Styles.InputBox}>
					<Text style={Styles.InputBoxText}>Name</Text>
					<TextInput
						style={Styles.Input}
						onChangeText={() => handleChange("name", user.name)}
						value={user.name}
					/>
				</View>
				<View style={Styles.InputBox}>
					<Text style={Styles.InputBoxText}>Email</Text>
					<TextInput
						style={Styles.Input}
						onChangeText={() => handleChange("email", user.email)}
						value={user.email}
					/>
				</View>
				<View style={Styles.InputBox}>
					<Text style={Styles.InputBoxText}>Password</Text>
					<TextInput
						style={Styles.Input}
						onChangeText={() => handleChange("password", user.password)}
						value={user.name}
					/>
				</View>
				<View style={Styles.InputBox}>
					<Text style={Styles.InputBoxText}>Phone Number</Text>
					<TextInput
						style={Styles.Input}
						onChangeText={() => handleChange("phoneNumber", user.phoneNumber)}
						value={user.name}
						keyboardType="phone-pad"
					/>
				</View>
				<View style={Styles.SubmitButtonView}>
					<TouchableOpacity style={Styles.SubmitButton} onPress={addMember}>
						<Text style={Styles.SubmitButtonText}>Add</Text>
					</TouchableOpacity>
					{error ? (
						<Text style={Styles.SubmitButtonErrorText}>{error}</Text>
					) : null}
				</View>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!isModalVisible);
				}}
			>
				<View>
					<Text style={Styles.WelcomeText}>
						Do you want to add another member?
					</Text>
					<View>
						<TouchableOpacity
							onPress={() => {
								addAnother(true);
							}}
						>
							<Text>Yes</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								addAnother(false);
							}}
						>
							<Text>No</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default MemberAdd;
