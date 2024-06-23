import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../../Colors";
import { allTreasurers } from "../../../globalDBValues";

const TreasurerManagementHome = () => {
	return (
		<View style={Styles.MainContainer}>
			<Text style={Styles.MainText}>Treasurer Management Home</Text>
			{allTreasurers.map((el, index) => {
				return (
					<View key={index} style={Styles.Cards}>
						<View style={{ padding: 10 }}>
							<Text style={Styles.CardsText}>Name: {el.name}</Text>
							<Text style={Styles.CardsText}>Email: {el.email}</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default TreasurerManagementHome;
