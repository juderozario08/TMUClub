import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ModalView from "./ModalView";
import { Styles } from "../Colors";

interface UserModalProps {
	selectedUser: any;
	isModalVisible: boolean;
	setIsModalVisible: any;
}

const UserModal: React.FC<PropsWithChildren<UserModalProps>> = ({
	selectedUser,
	isModalVisible,
	setIsModalVisible,
}) => {
	return (
		<ModalView
			title={
				selectedUser.role
					? selectedUser.role[0].toUpperCase() + selectedUser.role.slice(1)
					: ""
			}
			isVisible={isModalVisible}
			setIsVisible={setIsModalVisible}
		>
			<View style={styles.modalContent}>
				<Text style={Styles.ModalText}>{selectedUser.name}</Text>
				<Text style={Styles.ModalText}>{selectedUser.email}</Text>
				<Text style={Styles.ModalText}>{selectedUser.phoneNumber}</Text>
				<View style={styles.modalButtonView}>
					<Pressable style={styles.modalChangeButton}>
						<Text style={styles.modalButtonText}>Change</Text>
					</Pressable>
					<Pressable style={styles.modalSubmitButton}>
						<Text style={styles.modalButtonText}>Submit</Text>
					</Pressable>
					<Pressable style={styles.modalDeleteButton}>
						<Text style={styles.modalButtonText}>Delete</Text>
					</Pressable>
				</View>
			</View>
		</ModalView>
	);
};

export default UserModal;

const styles = StyleSheet.create({
	modalContent: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	modalButtonView: {
		flexDirection: "row",
		width: "100%",
		alignItems: "stretch",
		justifyContent: "space-evenly",
		marginTop: 20,
	},
	modalChangeButton: { backgroundColor: "lightblue", borderRadius: 20 },
	modalSubmitButton: {
		backgroundColor: "#0284C7",
		borderRadius: 20,
	},
	modalDeleteButton: {
		backgroundColor: "red",
		borderRadius: 20,
	},
	modalButtonText: { color: "white", padding: 10 },
});
