import React, { PropsWithChildren } from "react";
import {
	KeyboardTypeOptions,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import { Styles } from "../Colors";

interface InputViewProps {
	value: string | undefined;
	onChangeText: any;
	completionType: TextInputProps["autoComplete"];
	keyboardType: KeyboardTypeOptions;
	secured: boolean;
	capitalize: TextInputProps["autoCapitalize"];
	title: string;
	error: string | null;
}

const InputView: React.FC<PropsWithChildren<InputViewProps>> = ({
	value,
	onChangeText,
	completionType,
	keyboardType,
	secured,
	title,
	capitalize,
	error,
	children,
}) => {
	return (
		<View>
			<View style={Styles.InputBox}>
				<Text style={Styles.InputBoxText}>{title}</Text>
				<TextInput
					style={Styles.Input}
					onChangeText={onChangeText}
					value={value}
					autoCapitalize={capitalize}
					autoComplete={completionType}
					keyboardType={keyboardType}
					secureTextEntry={secured}
				/>
				{children}
			</View>
			<View style={{ alignItems: "center", justifyContent: "center" }}>
				{error ? <Text style={styles.errorBottomText}>{error}</Text> : null}
			</View>
		</View>
	);
};

export default InputView;

const styles = StyleSheet.create({
	errorBottomText: {
		color: "#EF4444",
		left: 4,
	},
});
