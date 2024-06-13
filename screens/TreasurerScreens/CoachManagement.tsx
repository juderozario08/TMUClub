import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../Colors";

const CoachManagement = () => {
    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Coach Management</Text>
            <View style={{ width: "100%", paddingHorizontal: 40, marginBottom: 20 }}>
                <TouchableOpacity
                    style={Styles.SubmitButton}
                    onPress={() => console.log("Add A Coach")}
                >
                    <Text style={Styles.SubmitButtonText}>Add Coach</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CoachManagement;
