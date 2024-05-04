import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { fetchUserInfo } from "../../globalRoutes.js";
import { Styles } from "../../Colors.js";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  const changeUserInfo = () => {
    console.log("Updating user information...");
  };

  useEffect(() => {
    setUserInfo(fetchUserInfo());
  }, []);

  return (
    <View style={Styles.MainContainer}>
      {userInfo
        ? (
          <View>
            <Text style={Styles.MainText}>{userInfo.name}</Text>
            <Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
            <Text style={Styles.MainSubText}>
              Email: {userInfo.phoneNumber}
            </Text>
            <TouchableOpacity
              style={Styles.SubmitButton}
              onPress={changeUserInfo}
            >
              <Text style={Styles.SubmitButtonText}>Update Information</Text>
            </TouchableOpacity>
          </View>
        )
        : <Text style={Styles.MainText}>Loading user information...</Text>}
    </View>
  );
};

export default Profile;
