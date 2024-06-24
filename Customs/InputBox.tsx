import React from "react";
import {
	KeyboardTypeOptions,
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import { Styles } from "../Colors";

interface InputViewProps {
	value: string | undefined;
	setValue: React.Dispatch<React.SetStateAction<string | number>>;
	completionType: TextInputProps["autoComplete"];
	keyboardType: KeyboardTypeOptions;
	secured: boolean;
	setSecureShow: React.Dispatch<React.SetStateAction<boolean>>;
	secureShow: boolean;
	capitalize: TextInputProps["autoCapitalize"];
	WrappedComponent: React.ComponentType<any>;
	WrappedSecureComponent: React.ComponentType<any>;
	hint: string;
}

const InputView: React.FC<InputViewProps> = ({
	value,
	setValue,
	completionType,
	keyboardType,
	secured,
	setSecureShow,
	secureShow,
	WrappedComponent,
	WrappedSecureComponent,
	hint,
	capitalize,
}) => {
	return (
		<View style={Styles.InputBox}>
			<Text style={Styles.InputBoxText}>{hint}</Text>
			<TextInput
				style={Styles.Input}
				onChangeText={setValue}
				value={value}
				autoCapitalize={capitalize}
				autoComplete={completionType}
				keyboardType={keyboardType}
				secureTextEntry={secured}
			/>
			{secured ? (
				<TouchableOpacity
					style={Styles.Feather}
					onPress={() => setSecureShow(!secureShow)}
				>
					<WrappedSecureComponent />
				</TouchableOpacity>
			) : (
				<WrappedComponent />
			)}
		</View>
	);
};

export default InputView;
