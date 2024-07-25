import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { Styles } from "../Colors";
import axios from "axios";
import { ClassCreateURI } from "../Globals/Routes";
import ModalView from "../Customs/ModalView";
import { ClassType } from "../Customs/Types";
import { DefaultClass } from "../Customs/DefaultValues";

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

    const hanleInput = (tag: string, value: any): void => {
        setClassData((prevState) => ({
            ...prevState,
            [tag]: value,
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
            ></ModalView>
        </View>
    );
};

export default ClassManagement;
