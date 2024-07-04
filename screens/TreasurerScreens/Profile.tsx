import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../../Colors";
import Loading from "../../Customs/Loading";
import { FetchUser } from "../../Globals/FetchFunctions";
import { User } from "../../Globals/AppValues";

interface ProfileProps {
    navigation: any;
}

const Profile: React.FC<ProfileProps> = () => {
    useEffect(() => {
        FetchUser();
        console.log(User);
    }, [User]);

    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Profile Screen</Text>
            {User.name.length > 0 ? (
                <View>
                    <Text style={Styles.MainSubText}>Email: {User.email}</Text>
                    <Text style={Styles.MainSubText}>Username: {User.name}</Text>
                    <Text style={Styles.MainSubText}>
                        Phone Number: {User.phoneNumber}
                    </Text>
                </View>
            ) : (
                <Loading />
            )}
        </View>
    );
};

export default Profile;
