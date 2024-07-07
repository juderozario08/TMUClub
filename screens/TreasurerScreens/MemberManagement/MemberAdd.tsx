import React, { useState } from "react";
import { Alert, Modal, Text, TextInput, View, Pressable } from "react-native";
import { Styles } from "../../../Colors";
import { SignUpURI, UserURI } from "../../../Globals/Routes";
import axios from "axios";
import { UserType } from "../../../Customs/Types";
import { AllMembers, UserInfo } from "../../../Globals/AppValues";

interface MemberAddProps {
	navigation: any;
}

const MemberAdd: React.FC<MemberAddProps> = ({
	navigation,
}): React.JSX.Element => {
	const [member, setMember] = useState<UserType>({
		name: "",
		email: "",
		password: "",
		phoneNumber: "",
		role: "member",
		classes: [],
		payments: [],
		balance: 0,
	});
	const [isModalVisible, setModalVisible] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (name: string, value: number | string) => {
		setMember({
			...member,
			[name]: value,
		});
	};

	const addMember = async () => {
		try {
		} catch (err: any) {
			setError(err.message);
		}
		await axios
			.post(`${SignUpURI}/treasurer`, member)
			.then((_) => {
				console.log(`The user: "${member.name}" has been added successfully.`);
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	function addAnother(val: boolean) {
		setModalVisible(false);
		!val ? navigation.navigate("Member Management Home") : null;
	}

	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.WelcomeText}>Add User</Text>
			<View style={Styles.InputBox}>
				<Text style={Styles.InputBoxText}>Name</Text>
				<TextInput
					style={Styles.Input}
					onChangeText={() => handleChange("name", member.name)}
					value={member.name}
				/>
			</View>
			<View style={Styles.InputBox}>
				<Text style={Styles.InputBoxText}>Email</Text>
				<TextInput
					style={Styles.Input}
					onChangeText={() => handleChange("email", member.email)}
					value={member.email}
				/>
			</View>
			<View style={Styles.InputBox}>
				<Text style={Styles.InputBoxText}>Password</Text>
				<TextInput
					style={Styles.Input}
					onChangeText={() => handleChange("password", member.password)}
					value={member.name}
				/>
			</View>
			<View style={Styles.InputBox}>
				<Text style={Styles.InputBoxText}>Phone Number</Text>
				<TextInput
					style={Styles.Input}
					onChangeText={() => handleChange("phoneNumber", member.phoneNumber)}
					value={member.name}
					keyboardType="phone-pad"
				/>
			</View>
			<View style={Styles.SubmitButtonView}>
				<Pressable style={Styles.SubmitButton} onPress={addMember}>
					<Text style={Styles.SubmitButtonText}>Add</Text>
				</Pressable>
				{error ? (
					<Text style={Styles.SubmitButtonErrorText}>{error}</Text>
				) : null}
			</View>
			<Modal animationType="slide" transparent={true} visible={isModalVisible}>
				<View style={Styles.ModalContainer}>
					<Text style={Styles.ModalTitle}>
						Do you want to add another member?
					</Text>
					<View>
						<Pressable
							onPress={() => {
								addAnother(true);
							}}
						>
							<Text>Yes</Text>
						</Pressable>
						<Pressable
							onPress={() => {
								addAnother(false);
							}}
						>
							<Text>No</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default MemberAdd;
