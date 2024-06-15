import React, { useState } from "react";
import {
	KeyboardTypeOptions,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Styles } from "../../Colors";
import axios from "axios";
import { classCreateURI } from "../../globalRoutes";

const ClassManagement = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [classData, setClassData] = useState({
		title: "",
		coach: "",
		date: new Date(),
		participants: "",
	});
	const [coachInfo, setCoachInfo] = useState({});
	const [error, setError] = useState(null);

	const addClass = async () => {
		await axios
			.post(`${classCreateURI}`, classData)
			.then((res) => {
				if (res.status === 200) console.log("Class Added");
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	const hanleInput = (tag: string, value: any): void => {
		setClassData((prevState) => ({
			...prevState,
			[tag]: value,
		}));
	};

	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.MainText}>Class Management</Text>
			<View style={Styles.SubmitButtonView}>
				<TouchableOpacity
					style={Styles.SubmitButton}
					onPress={() => setIsVisible(!isVisible)}
				>
					<Text style={Styles.SubmitButtonText}>Add Class</Text>
				</TouchableOpacity>
			</View>
			<Modal visible={isVisible} transparent={true} animationType="slide">
				<View style={Styles.ModalContainer}>
					<View style={Styles.ModalContent}>
						<Text style={Styles.ModalText}>Modal</Text>
						<View style={Styles.ModalInputBox}>
							<Text style={Styles.ModalInputBoxText}>Title</Text>
							<TextInput
								style={Styles.ModalInput}
								onChangeText={(text) => hanleInput("title", text)}
								value={classData.title}
								autoCapitalize="none"
								keyboardType={"default" as KeyboardTypeOptions}
								secureTextEntry={false}
							/>
						</View>
						<View style={Styles.ModalInputBox}>
							<Text style={Styles.ModalInputBoxText}>Coach</Text>
							<TextInput
								style={Styles.ModalInput}
								onChangeText={(text) => hanleInput("coach", text)}
								value={classData.coach}
								autoCapitalize="none"
								keyboardType={"default" as KeyboardTypeOptions}
								secureTextEntry={false}
							/>
						</View>
						<View style={Styles.ModalInputBox}>
							<Text style={Styles.ModalInputBoxText}>Participants</Text>
							<TextInput
								style={Styles.ModalInput}
								onChangeText={(text) => hanleInput("participants", text)}
								value={classData.participants}
								autoCapitalize="none"
								keyboardType={"default" as KeyboardTypeOptions}
								secureTextEntry={false}
							/>
						</View>
						<TouchableOpacity style={Styles.SubmitButton} onPress={addClass}>
							<Text style={Styles.SubmitButtonText}>Add Class</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={Styles.SubmitButton}
							onPress={() => setIsVisible(false)}
						>
							<Text style={Styles.SubmitButtonText}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ClassManagement;
