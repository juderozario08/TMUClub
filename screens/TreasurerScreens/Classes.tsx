import React, { useState } from "react";
import {
	KeyboardTypeOptions,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
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
		participants: [],
	});
    const [coachInfo, setCoachInfo] = useState({
        
    })
	const [error, setError] = useState(null);

	const addClass = async () => {
		await axios
			.post(`${classCreateURI}`, classData)
			.then((res) => {
				if (res.status === 200) {
					console.log("Class Added");
				}
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
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={{ color: "black", fontSize: 24 }}>Modal</Text>
						<View style={Styles.InputBox}>
							<Text style={Styles.InputBoxText}>ENTER TEXT</Text>
							<TextInput
								style={Styles.Input}
								onChangeText={(text) => hanleInput("title", text)}
								value={classData.title}
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

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		marginHorizontal: 34,
		justifyContent: "center",
		alignItems: "stretch",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
	},
	modalContent: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		alignItems: "center",
	},
});

export default ClassManagement;
