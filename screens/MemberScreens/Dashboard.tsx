import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Styles } from "../../Colors";
import { User } from "../../Globals/AppValues";
import { UserType } from "../../Customs/Types";
import Loading from "../../Customs/Loading";
import { FetchUser } from "../../Globals/FetchFunctions";

const Dashboard = () => {
    const [user, setUser] = useState<UserType>(User);
    useEffect(() => {
        if (user.name.length === 0) FetchUser(setUser);
    }, []);
    return user.name.length === 0 ? (
        <View style={Styles.MainContainer}>
            <Loading />
        </View>
    ) : (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainSubText}>Email: {user.email}</Text>
            <Text style={Styles.MainSubText}>PhoneNumber: {user.phoneNumber}</Text>
        </View>
    );
};

export default Dashboard;
