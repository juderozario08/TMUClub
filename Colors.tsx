import { Appearance, ColorSchemeName, StyleSheet } from "react-native";

// Get the theme of the device
export const theme: ColorSchemeName = Appearance.getColorScheme();

export const headerTitleColor = theme === "dark" ? "white" : "black"; // Header title color

// Set the colors based on the theme
export const backgroundColor: string = theme === "dark" ? "black" : "white"; // background color
export const defaultTextColor: string = theme === "dark" ? "white" : "black"; // text color

export const defaultInputBoxInputColor: string =
	theme === "dark" ? "black" : "white"; // Input box input color
export const defaultInputBoxBackgroundColor: string =
	theme === "dark" ? "#333" : "#eee"; // Input box background color
export const defaultInputBoxText: string =
	theme === "dark" ? "darkgray" : "black"; // Input box text color

export const defaultModalTextColor: string =
	theme === "dark" ? "black" : "white"; // Modal text color

export const bottomBoxTextColor: string = theme === "dark" ? "white" : "black"; // Bottom box text color

export const tabColor: string = theme === "dark" ? "white" : "black"; // Tab color

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
		fontSize: 20,
		fontWeight: "bold",
		color: defaultTextColor,
	},
	InputBox: {
		flexDirection: "row",
		backgroundColor: defaultInputBoxBackgroundColor,
		width: "100%",
		borderWidth: 1,
		borderRadius: 10,
		color: defaultTextColor,
	},
	Input: {
		width: "100%",
		color: defaultTextColor,
		alignSelf: "center",
		paddingTop: 20,
		paddingBottom: 5,
		paddingHorizontal: 10,
	},
	InputBoxText: {
		top: 3,
		paddingLeft: 10,
		position: "absolute",
		color: defaultInputBoxText,
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
	BottomText: { color: bottomBoxTextColor, fontSize: 14 },
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
		color: defaultTextColor,
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
	},
	ModalInputBox: {
		flexDirection: "row",
		backgroundColor: defaultInputBoxBackgroundColor,
		width: "100%",
		borderWidth: 1,
		borderRadius: 10,
		color: defaultModalTextColor,
	},
	ModalInput: {
		width: "100%",
		color: defaultInputBoxInputColor,
		alignSelf: "center",
		paddingTop: 20,
		paddingBottom: 5,
		paddingHorizontal: 10,
	},
	ModalInputBoxText: {
		top: 3,
		paddingLeft: 10,
		fontSize: 12,
		position: "absolute",
		color: "#999",
	},
	CardsContainer: {
		alignItems: "stretch",
		justifyContent: "center",
	},
	Cards: {
		width: "100%",
		borderWidth: 1,
		borderColor: "darkgray",
		paddingVertical: 10,
		marginVertical: 10,
	},
	CardsText: {
		color: defaultTextColor,
	},
});
