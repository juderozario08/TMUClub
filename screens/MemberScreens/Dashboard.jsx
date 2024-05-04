import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { fetchUserInfo } from "../../globalRoutes.js";
import { Styles } from "../../Colors.js";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUserInfo(fetchUserInfo());
  }, []);

  return (
    <SafeAreaView style={Styles.WelcomeText}>
      {userInfo
        ? (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
                marginTop: "13%",
                marginLeft: "8%",
              }}
            >
              Welcome {userInfo.name.split(" ")[0][0].toUpperCase() +
                userInfo.name.split(" ")[0].slice(1)},
            </Text>
            <View style={Styles.MainContainer}>
              <Text style={Styles.MainSubText}>Email: {userInfo.email}</Text>
              <Text style={Styles.MainSubText}>
                Email: {userInfo.phoneNumber}
              </Text>
            </View>
          </View>
        )
        : <Text style={Styles.MainText}>Loading user information...</Text>}
    </SafeAreaView>
  );
};

export default Dashboard;
