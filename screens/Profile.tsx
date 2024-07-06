import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../Colors";
import Loading from "../Customs/Loading";
import { FetchUser } from "../Globals/FetchFunctions";
import { User } from "../Globals/AppValues";
import { UserType } from "../Customs/Types";

interface ProfileProps {
    navigation: any;
}

const Profile: React.FC<ProfileProps> = () => {
    const [user, setUser] = useState<UserType>(User);
    useEffect(() => {
        FetchUser(setUser);
    }, []);

    return (
        <View style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Profile Screen</Text>
            {user.name.length > 0 ? (
                <View>
                    <Text style={Styles.MainSubText}>Email: {user.email}</Text>
                    <Text style={Styles.MainSubText}>Username: {user.name}</Text>
                    <Text style={Styles.MainSubText}>
                        Phone Number: {user.phoneNumber}
                    </Text>
                </View>
            ) : (
                <Loading />
            )}
        </View>
    );
};

export default Profile;
