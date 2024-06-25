import React from "react";

import { Text, View, ScrollView } from "react-native";
import { Styles } from "../Colors";

interface UserListProps {
	users: any[];
	navigation: any;
}

const UserList: React.FC<UserListProps> = ({ users, navigation }) => {
	return (
		<ScrollView contentContainerStyle={Styles.CardsContainer}>
			{users.length > 0 ? (
				users.map((el: any, index: number) => (
					<View key={index} style={[Styles.Cards]}>
						<View style={{ padding: 10 }}>
							<Text style={Styles.CardsText}>Name: {el.name}</Text>
							<Text style={Styles.CardsText}>Email: {el.email}</Text>
						</View>
					</View>
				))
			) : (
				<Text style={Styles.MainText}>Loading</Text>
			)}
		</ScrollView>
	);
};

export default UserList;
