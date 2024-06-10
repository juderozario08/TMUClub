import React, { useEffect, useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../Colors.js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userURI } from "../../globalRoutes.js";
import { Eye, EyeOff } from "react-native-feather";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [confirmPasswordValidator, setConfirmPasswordValidator] = useState(
    false,
  );

  const determineEye = (show) =>
    show
      ? <Eye color={"darkgray"} fill={"none"} />
      : <EyeOff color={"darkgray"} fill={"none"} />;
  const fetchUserInfo = async () => {
    try {
      const id = await AsyncStorage.getItem("id");
      if (!id) {
        console.log("User ID not found in AsyncStorage.");
      }
      const response = await axios.get(`${userURI}/${id}`);
      setUserInfo(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const validatePassword = (text) => {
    setPassword(text.trim());
    setPasswordValidator(false);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&\.]{8,}$/;
    if (text.length >= 8 && text.trim().match(passwordRegex)) {
      setPasswordValidator(true);
    }
  };
  const handleChangePassword = () => {
    console.log("Changing the password");
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);
  return userInfo
    ? (
      <View style={Styles.MainContainer}>
        <View style={Styles}></View>
        <Text style={Styles.MainText}>Profile Screen</Text>
        <View style={{ paddingTop: 30 }}>
          <Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
          <Text style={Styles.MainSubText}>Username: {userInfo.name}</Text>
          <Text style={Styles.MainSubText}>
            Phone-Number: {userInfo.phoneNumber}
          </Text>
        </View>
        <View style={Styles.SubmitButtonView}>
          <TouchableOpacity
            style={Styles.SubmitButton}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Text style={Styles.SubmitButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => setIsVisible(!isVisible)}
        >
          <View style={Styles.ModalContainer}>
            <View style={Styles.ModalContent}>
              <Text style={Styles.ModalTitle}>Change Password</Text>
              <View>
                <View
                  style={{
                    gap: 20,
                    paddingVertical: 20,
                    paddingHorizontal: 8,
                  }}
                >
                  <View style={Styles.InputBox}>
                    <Text style={Styles.InputBoxText}>{"New Password: "}</Text>
                    <TextInput
                      style={[Styles.Input, { color: "black" }]}
                      onChangeText={setPassword}
                      value={password}
                      placeholderTextColor="lightgray"
                      autoCapitalize="none"
                      autoComplete="password"
                      secureTextEntry={!passwordShow}
                    />
                    <TouchableOpacity
                      style={Styles.Feather}
                      onPress={() => {
                        setPasswordShow(!passwordShow);
                      }}
                    >
                      {determineEye(passwordShow)}
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.InputBox}>
                    <Text style={Styles.InputBoxText}>
                      {"Confirm Password: "}
                    </Text>
                    <TextInput
                      style={[Styles.Input, { color: "black" }]}
                      onChangeText={setConfirmPassword}
                      value={confirmPassword}
                      placeholderTextColor="lightgray"
                      secureTextEntry={!confirmPasswordShow}
                      autoCapitalize="none"
                      autoComplete="password"
                    />
                    <TouchableOpacity
                      style={Styles.Feather}
                      onPress={() => {
                        setConfirmPasswordShow(!confirmPasswordShow);
                      }}
                    >
                      {determineEye(confirmPasswordShow)}
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    Styles.SubmitButton,
                    { marginTop: 10, alignSelf: "center" },
                  ]}
                  onPress={handleChangePassword}
                >
                  <Text
                    style={[Styles.SubmitButtonText, { paddingHorizontal: 20 }]}
                  >
                    Change Password
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Styles.ModalButton}
                onPress={() => setIsVisible(!isVisible)}
              >
                <Text style={Styles.ModalButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
    : (
      <View>
        <Text>Is Loading...</Text>
      </View>
    );
};

export default Profile;
