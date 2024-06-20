import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../../Colors";

interface MemberManagementHomeProps {
	navigation: any;
}

const MemberManagementHome: React.FC<MemberManagementHomeProps> = ({
	navigation,
}): React.JSX.Element => {
	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.WelcomeText}>Member Management</Text>
			<Text style={Styles.MainText}>SHOW ALL MEMBERS HERE</Text>
			<View style={Styles.SubmitButtonView}>
				<TouchableOpacity
					style={Styles.SubmitButton}
					onPress={() => {
						navigation.navigate("Member Add");
					}}
				>
					<Text style={Styles.SubmitButtonText}>Add</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MemberManagementHome;
