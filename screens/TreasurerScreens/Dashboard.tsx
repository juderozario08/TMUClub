import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";

interface DashboardProps {
	navigation: any;
	title: string;
}

const Dashboard: React.FC<DashboardProps> = ({ navigation, title }) => {
	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.WelcomeText}>Treasurer Dashboard {title}</Text>
		</View>
	);
};

export default Dashboard;
