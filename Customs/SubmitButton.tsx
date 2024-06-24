import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../Colors";

interface SubmitButtonProps {
	error: any;
	pressed: any;
	title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
	title,
	error,
	pressed,
}) => {
	return (
		<View style={{ width: "100%", paddingHorizontal: 40, marginBottom: 40 }}>
			<TouchableOpacity style={Styles.SubmitButton} onPress={pressed}>
				<Text style={Styles.SubmitButtonText}>{title}</Text>
			</TouchableOpacity>
			{error.length > 1 ? (
				<Text style={Styles.SubmitButtonErrorText}>{error}</Text>
			) : null}
		</View>
	);
};

export default SubmitButton;
