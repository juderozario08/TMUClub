import React, { PropsWithChildren } from "react";
import { Modal, Text, View } from "react-native";
import { Styles } from "../Colors";

interface ModalViewProps {
	title: string;
	isVisible: boolean;
	setIsVisible: any;
}

const ModalView: React.FC<PropsWithChildren<ModalViewProps>> = ({
	isVisible,
	title,
	setIsVisible,
	children,
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
					{children}
				</View>
			</View>
		</Modal>
	);
};

export default ModalView;
