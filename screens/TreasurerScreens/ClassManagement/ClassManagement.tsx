import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import axios from "axios";
import { Styles } from "../../../Colors";
import { classCreateURI } from "../../../globalRoutes";
import ModalView from "../../../Customs/ModalView";

const ClassManagement = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [classData, setClassData] = useState({
		title: "",
		coach: "",
		date: new Date(),
		participants: "",
	});
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
				<Pressable
					style={Styles.SubmitButton}
					onPress={() => setIsVisible(!isVisible)}
				>
					<Text style={Styles.SubmitButtonText}>Add Class</Text>
				</Pressable>
			</View>
			<ModalView
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				title="Add Class"
			></ModalView>
		</View>
	);
};

export default ClassManagement;
