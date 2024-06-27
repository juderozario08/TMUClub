import React from "react";
import { ActivityIndicator } from "react-native";
import { backgroundColor } from "../Colors";

const Loading = () => {
	return (
		<ActivityIndicator
			size="large"
			color={backgroundColor === "black" ? "white" : "black"}
		/>
	);
};

export default Loading;
