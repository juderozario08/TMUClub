import React, { useState } from "react";
import { Text, Pressable, View, TextInput } from "react-native";
import { Styles } from "../Colors";
import axios from "axios";
import { ClassCreateURI } from "../Globals/Routes";
import ModalView from "../Customs/ModalView";
import { ClassType } from "../Customs/Types";
import { DefaultClass } from "../Customs/DefaultValues";
import { Date } from "mongoose";

const ClassManagement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [classData, setClassData] = useState<ClassType>(DefaultClass);
    const [error, setError] = useState(null);

    const addClass = async () => {
        await axios
            .post(`${ClassCreateURI}`, classData)
            .then((_) => {
                console.log("Class Added");
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

    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Class Management</Text>
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
                <View>
                    <View style={Styles.InputBox}>
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
                    <View style={Styles.InputBox}>
                        <Text style={Styles.InputBoxText}>{"Coach: "}</Text>
                        <TextInput
                            style={Styles.Input}
                            onChangeText={(text) => {
                                handleTextChange("coach", text);
                            }}
                            value={classData.coach}
                            placeholderTextColor="lightgray"
                        />
                    </View>
                    {/* Take it as a date input */}
                    <View style={Styles.InputBox}>
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
                    <View style={Styles.InputBox}>
                        <Text style={Styles.InputBoxText}>{"Participants: "}</Text>
                        <TextInput
                            style={Styles.Input}
                            onChangeText={(text) => {
                                handleTextChange("participants", text);
                            }}
                            value={classData.participants as any}
                            placeholderTextColor="lightgray"
                        />
                    </View>
                    <View style={Styles.InputBox}>
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
                </View>
            </ModalView>
        </View>
    );
};

export default ClassManagement;
