import React from "react";
import { Modal, Text, View } from "react-native";
import { Styles } from "../Colors";

interface ModalViewProps {
	title: string;
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	WrappedComponent: React.ComponentType<any>;
}

const ModalView: React.FC<ModalViewProps> = ({
	isVisible,
	title,
	setIsVisible,
	WrappedComponent,
}) => {
	return (
		<Modal
			visible={isVisible}
			transparent={true}
			animationType="slide"
			onRequestClose={() => {
				setIsVisible(!isVisible);
			}}
		>
			<View style={Styles.ModalContainer}>
				<View style={Styles.ModalContent}>
					<Text style={Styles.ModalTitle}>{title}</Text>
					<WrappedComponent />
				</View>
			</View>
		</Modal>
	);
};

export default ModalView;
