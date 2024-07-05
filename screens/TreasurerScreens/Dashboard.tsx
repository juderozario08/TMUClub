import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";

interface DashboardProps {
	navigation: any;
}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.MainText}>Dashboard</Text>
		</View>
	);
};

export default Dashboard;
