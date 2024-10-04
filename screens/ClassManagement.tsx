import React, { useEffect, useState } from "react";
import { Text, Pressable, View, TextInput, StyleSheet } from "react-native";
import { Styles } from "../Colors";
import axios from "axios";
import { ClassCreateURI } from "../Globals/Routes";
import ModalView from "../Customs/ModalView";
import { ClassType, UserType } from "../Customs/Types";
import { DefaultClass, DefaultUser } from "../Customs/DefaultValues";
import { FetchUsersByRole } from "../Globals/FetchFunctions";
import { Dropdown } from "react-native-element-dropdown";

const ClassManagement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [classData, setClassData] = useState<ClassType>(DefaultClass);
    const [classes, setClasses] = useState<ClassType[]>([]);
    const [coaches, setCoaches] = useState<UserType[]>([]);
    const [coach, setCoach] = useState<UserType>(DefaultUser);
    const [members, setMembers] = useState<UserType[]>([]);
    const [error, setError] = useState(null);
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const addClass = async () => {
        await axios
            .post(`${ClassCreateURI}`, classData)
            .then((_) => {
                console.log("Class Added", coach, classes, members);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const handleTextChange = (tag: string, text: any) => {
        setClassData((prevState) => ({
            ...prevState,
            [tag]: text,
        }));
    };

    useEffect(() => {
        FetchUsersByRole(setCoaches, "coach");
        FetchUsersByRole(setMembers, "member");
    }, []);

    return (
        <View style={Styles.MainContainer}>
            <View style={Styles.SubmitButtonView}>
                <Pressable
                    style={Styles.SubmitButton}
                    onPress={() => setIsVisible(!isVisible)}
                >
                    <Text style={Styles.SubmitButtonText}>Add Class</Text>
                </Pressable>
            </View>
            <ModalView
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                title="Add Class"
            >
                <View style={{ gap: 10 }}>
                    <View style={Styles.ModalInputBox}>
                        <Text style={Styles.InputBoxText}>{"Title: "}</Text>
                        <TextInput
                            style={Styles.Input}
                            onChangeText={(text) => {
                                handleTextChange("title", text);
                            }}
                            value={classData.title}
                            placeholderTextColor="lightgray"
                        />
                    </View>
                    {/* Must be a drop down menu for the number of coaches available  */}
                    <View style={Styles.ModalInputBox}>
                        <Dropdown
                            style={[Styles.Dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={coaches}
                            search
                            maxHeight={300}
                            labelField="name"
                            valueField="_id"
                            placeholder={'Select Coach'}
                            searchPlaceholder="Search..."
                            value={coach || "Select a coach: "}
                            onFocus={() => {
                                FetchUsersByRole(setCoaches, "coach");
                                setIsFocus(true)
                            }}
                            onChange={item => {
                                setCoach(item);
                                setIsFocus(false)
                            }}
                        />
                    </View>
                    {/* Take it as a date input */}
                    <View style={Styles.ModalInputBox}>
                        <Text style={Styles.InputBoxText}>{"Date: "}</Text>
                        <TextInput
                            style={Styles.Input}
                            onChangeText={(text) => {
                                handleTextChange("date", text);
                            }}
                            value={classData.date as any}
                            placeholderTextColor="lightgray"
                        />
                    </View>
                    {/* participants must be a multi select option */}
                    <View style={Styles.ModalInputBox}>
                        <Text style={Styles.InputBoxText}>{"Participants: "}</Text>
                        <Dropdown
                            search
                            style={Styles.ModalInputBox}
                            data={members}
                            labelField="name"
                            valueField="_id"
                            onChange={(item) => {
                                setCoach(item);
                            }}
                        />
                    </View>
                    <View style={Styles.ModalInputBox}>
                        <Text style={Styles.InputBoxText}>{"Cost: "}</Text>
                        <TextInput
                            style={Styles.Input}
                            onChangeText={(text) => {
                                handleTextChange("cost", text);
                            }}
                            keyboardType={"number-pad"}
                            value={classData.cost as any}
                        />
                    </View>
                    <Text>{error}</Text>
                    <View style={{ alignItems: "center" }}>
                        <Pressable
                            style={[Styles.ModalButton, { marginTop: 5 }]}
                            onPress={addClass}
                        >
                            <Text style={Styles.ModalButtonText}>Submit</Text>
                        </Pressable>
                    </View>
                </View>
            </ModalView>
        </View>
    );
};

export default ClassManagement;

const styles = StyleSheet.create({
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "gray"
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
