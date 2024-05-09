import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../Colors.js";

const ClassManagement = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Class Management</Text>
            <View style={Styles.SubmitButtonView}>
                <TouchableOpacity
                    style={Styles.SubmitButton}
                    onPress={() => setIsVisible(!isVisible)}
                >
                    <Text style={Styles.SubmitButtonText}>Add Class</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={isVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{ color: "black", fontSize: 24 }}>Modal</Text>
                        <TouchableOpacity
                            style={Styles.SubmitButton}
                            onPress={() => setIsVisible(false)}
                        >
                            <Text style={Styles.SubmitButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        marginHorizontal: 34,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalContent: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
});

export default ClassManagement;
