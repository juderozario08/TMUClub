import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../../Colors";

interface MemberManagementHomeProps {
    navigation: any;
}

const MemberManagementHome: React.FC<MemberManagementHomeProps> = ({
    navigation,
}): React.JSX.Element => {
    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.WelcomeText}>Member Management</Text>
            <View>
                <Text>SHOW ALL MEMBERS HERE</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Member Add");
                }}
            >
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MemberManagementHome;
