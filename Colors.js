import { Appearance, StyleSheet } from "react-native";

export const theme = Appearance.getColorScheme();
export const backgroundColor = theme === "dark" ? "black" : "white";
export const defaultTextColor = theme === "dark" ? "white" : "black";
export const tabColor = theme === "dark" ? "white" : "black";

export const Styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		backgroundColor: backgroundColor,
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
		gap: 10,
	},
	MainText: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
		color: defaultTextColor,
	},
	MainSubText: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
		color: defaultTextColor,
	},
	InputBox: {
		flexDirection: "row",
        backgroundColor: theme === "dark" ? "#333" : "#000",
		width: "100%",
		borderWidth: 1,
		borderRadius: 10,
		color: defaultTextColor,
	},
	Input: {
		width: "100%",
		color: theme === "dark" ? "white" : "black",
		alignSelf: "center",
		paddingTop: 20,
		paddingBottom: 5,
		paddingHorizontal: 10,
	},
	InputBoxText: {
		top: 3,
		paddingLeft: 10,
		position: "absolute",
		color: "darkgray",
	},
	Feather: {
		alignSelf: "center",
		position: "absolute",
		right: 5,
	},
	BottomTextContainer: {
		alignSelf: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	BottomText: { color: "white", fontSize: 14 },
	BottomTextLink: { fontSize: 14, color: "#0284C7" },
	SubmitButton: {
		width: "100%",
		backgroundColor: "#0284C7",
		borderRadius: 24,
		paddingVertical: 14,
		marginTop: 40,
	},
	SubmitButtonText: {
		color: "white",
		textAlign: "center",
	},
	SubmitButtonView: {
		width: "100%",
		paddingHorizontal: 40,
		marginBottom: 20,
	},
	SubmitButtonErrorText: {
		color: "#EF4444",
		textAlign: "center",
		paddingTop: 12,
	},
	WelcomeText: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	ModalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	ModalContent: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 20,
		width: "80%",
		alignItems: "center",
		gap: 5,
	},
	ModalTitle: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 24,
		marginBottom: 20,
	},
	ModalText: {
        fontSize: 16,
		marginBottom: 10,
	},
	ModalButton: {
		marginTop: 20,
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		elevation: 2,
		backgroundColor: "#0284C7",
	},
    ModalButtonText: {
        textAlign: "center",
        color: "white",
    }
});
