import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../../Colors";
import { allMembers } from "../../../globalDBValues";

interface MemberManagementHomeProps {
	navigation: any;
}

const MemberManagementHome: React.FC<MemberManagementHomeProps> = ({
	navigation,
}): React.JSX.Element => {
	return (
		<ScrollView contentContainerStyle={Styles.MainContainer}>
			{allMembers.map((el, index) => {
				return (
					<View key={index} style={Styles.Cards}>
						<View style={{ padding: 10 }}>
							<Text style={Styles.CardsText}>{el.name}</Text>
							<Text style={Styles.CardsText}>{el.email}</Text>
						</View>
					</View>
				);
			})}
		</ScrollView>
	);
};

export default MemberManagementHome;
