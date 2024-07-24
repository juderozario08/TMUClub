import React, { PropsWithChildren } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { Styles } from "../Colors";
import { XCircle } from "react-native-feather";

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
					<View style={{ position: "absolute", right: 13, top: 13 }}>
						<Pressable onPress={() => setIsVisible(!isVisible)}>
							<XCircle stroke={"gray"} fill={"none"} height={20} />
						</Pressable>
					</View>
					<Text style={Styles.ModalTitle}>{title}</Text>
					{children}
				</View>
			</View>
		</Modal>
	);
};

export default ModalView;
