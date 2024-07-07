import React, { useState } from "react";
import { Modal, Text, TextInput, View, Pressable } from "react-native";
import { Styles } from "../../Colors";
import { SignUpURI } from "../../Globals/Routes";
import axios from "axios";
import { DefaultParamList, UserType } from "../../Customs/Types";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type UserAddNavProps = DrawerNavigationProp<DefaultParamList>;

interface UserAddProps {
    navigation: UserAddNavProps;
    role: string;
}

const UserAdd: React.FC<UserAddProps> = ({ navigation, role }) => {
    const [user, setUser] = useState<UserType>({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "user",
        classes: [],
        payments: [],
        balance: 0,
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
        await axios
            .post(`${SignUpURI}/${role}`, user)
            .then((_) => {
                console.log(`The user: "${user.name}" has been added successfully.`);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    };

    function addAnother(val: boolean) {
        setModalVisible(false);
        !val ? navigation.navigate("Member Management Home" as never) : null;
    }

    return (
        <View style={Styles.MainContainer}>
            <Text style={[Styles.MainText, { marginBottom: 30 }]}>Add Member</Text>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Name</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={(text) => handleChange("name", text)}
                    value={user.name}
                />
            </View>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Email</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={(text) => handleChange("email", text)}
                    value={user.email}
                />
            </View>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Password</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={(text) => handleChange("password", text)}
                    value={user.password}
                />
            </View>
            <View style={Styles.InputBox}>
                <Text style={Styles.InputBoxText}>Phone Number</Text>
                <TextInput
                    style={Styles.Input}
                    onChangeText={(text) => handleChange("phoneNumber", text)}
                    value={user.phoneNumber}
                    keyboardType="phone-pad"
                />
            </View>
            <View style={Styles.SubmitButtonView}>
                <Pressable style={Styles.SubmitButton} onPress={addMember}>
                    <Text style={Styles.SubmitButtonText}>Add</Text>
                </Pressable>
                {error ? (
                    <Text style={Styles.SubmitButtonErrorText}>{error}</Text>
                ) : null}
            </View>
            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View style={Styles.ModalContainer}>
                    <Text style={Styles.ModalTitle}>
                        Do you want to add another user?
                    </Text>
                    <View>
                        <Pressable
                            onPress={() => {
                                addAnother(true);
                            }}
                        >
                            <Text>Yes</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                addAnother(false);
                            }}
                        >
                            <Text>No</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default UserAdd;
