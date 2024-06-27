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
    completionType?: TextInputProps["autoComplete"];
    keyboardType?: KeyboardTypeOptions;
    secured?: boolean;
    capitalize?: TextInputProps["autoCapitalize"];
    modal?: boolean;
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
    modal,
    children,
}) => {
    const isModal = modal || false;
    return (
        <View>
            <View style={isModal ? Styles.ModalInputBox : Styles.InputBox}>
                <Text style={isModal ? Styles.ModalInputBoxText : Styles.InputBoxText}>
                    {title}
                </Text>
                <TextInput
                    style={isModal ? Styles.ModalInput : Styles.Input}
                    onChangeText={onChangeText}
                    value={value}
                    autoCapitalize={
                        capitalize || ("none" as TextInputProps["autoCapitalize"])
                    }
                    autoComplete={
                        completionType || ("off" as TextInputProps["autoComplete"])
                    }
                    keyboardType={keyboardType || ("default" as KeyboardTypeOptions)}
                    secureTextEntry={secured || false}
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
