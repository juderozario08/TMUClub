import { Appearance, StyleSheet } from "react-native";

export const theme = Appearance.getColorScheme();
export const backgroundColor = theme === "black" ? "white" : "black";

export const Styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: theme === "dark" ? "black" : "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        gap: 10,
    },
    MainText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: theme === "dark" ? "white" : "black",
    },
    MainSubText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: theme === "dark" ? "white" : "black",
    },
    InputBox: {
        flexDirection: "row",
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme === "dark" ? "white" : "black",
    },
    Input: {
        width: "100%",
        color: theme === "dark" ? "white" : "black",
        alignSelf: "center",
        paddingTop: 15,
        paddingHorizontal: 5,
    },
    InputBoxText: {
        top: 1,
        left: 5,
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
        backgroundColor: "#0284C7",
        borderRadius: 24,
        paddingVertical: 14,
        width: "100%",
        marginTop: 40,
    },
    SubmitButtonText: {
        color: "white",
        textAlign: "center",
    },
    SubmitButtonErrorText: {
        color: "#EF4444",
        textAlign: "center",
        paddingTop: 12,
    },
    WelcomeText: {
        flex: 1,
        backgroundColor: theme === "dark" ? "black" : "white",
    },
});
