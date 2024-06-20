import React, { useState } from "react";
import { Alert, Modal, Text, TextInput, View } from "react-native";
import { Styles } from "../../../Colors";
import { signUpURI, userURI } from "../../../globalRoutes";
import axios from "axios";
import { allMembers, allCoaches, allTreasurers } from "../../../globalDBValues";
import { TouchableOpacity } from "react-native-gesture-handler";

interface MemberAddProps {
    navigation: any;
}

const MemberAdd: React.FC<MemberAddProps> = ({
    navigation,
}): React.JSX.Element => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        balance: 0,
        classes: [],
    });
    const [isModalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (name: string, value: number | string) => {
        setUser({
            ...user,
            [name]: value,
        });
    };
    const addMember = async () => {
        try {
        } catch (err: any) {
            setError(err.message);
        }
        axios
            .post(`${signUpURI}/treasurer`, {
                name: "apsijf",
                email: "absgob@mail.com",
                password: "Anyone123!",
                phoneNumber: "1234567890",
                balance: 50,
                classes: [],
            })
            .then((_) => {
                Alert.alert(`The user: "${user.name}" has been added successfully.`);
                console.log(`The user: "${user.name}" has been added successfully.`);
                fetchUsers();
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    const fetchUsers = async () => {
        try {
            const res = await axios.get(userURI);
            res.data.forEach((user: any) => {
                if (user.role === "member") {
                    allMembers.push(user);
                } else if (user.role === "coach") {
                    allCoaches.push(user);
                } else if (user.role === "treasurer") {
                    allTreasurers.push(user);
                }
            });
        } catch (err: any) {
            console.log(err.message);
        }
    };
    function addAnother(val: boolean) {
        !val ? navigation.navigate("MemberID Home") : null;
    }

    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.WelcomeText}>Add User</Text>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Name</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={() => handleChange("name", user.name)}
                    value={user.name}
                />
            </View>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Email</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={() => handleChange("email", user.email)}
                    value={user.email}
                />
            </View>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Password</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={() => handleChange("password", user.password)}
                    value={user.name}
                />
            </View>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Phone Number</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={() => handleChange("phoneNumber", user.phoneNumber)}
                    value={user.name}
                    keyboardType="phone-pad"
                />
            </View>
            <View style={Styles.SubmitButtonView}>
                <TouchableOpacity style={Styles.SubmitButton} onPress={addMember}>
                    <Text style={Styles.SubmitButtonText}>Add</Text>
                </TouchableOpacity>
                {error ? (
                    <Text style={Styles.SubmitButtonErrorText}>{error}</Text>
                ) : null}
            </View>
            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View>
                    <Text style={Styles.WelcomeText}>
                        Do you want to add another member?
                    </Text>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                addAnother(true);
                            }}
                        >
                            <Text>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                addAnother(false);
                            }}
                        >
                            <Text>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MemberAdd;
