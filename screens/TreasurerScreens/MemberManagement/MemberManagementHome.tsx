import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../../../Colors";
import axios from "axios";
import { UserRoleURI } from "../../../Globals/Routes";
import UserList from "../../../Customs/UserList";

interface MemberManagementHomeProps {
    navigation: any;
}

const MemberManagementHome: React.FC<MemberManagementHomeProps> = ({
    navigation,
}): React.JSX.Element => {
    const [allMembers, setAllMembers] = useState<any[]>([]);
    const fetchAllMembers = async () => {
        try {
            const res = await axios.get(`${UserRoleURI}/member`);
            setAllMembers(res.data);
        } catch (err: any) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        fetchAllMembers();
    }, []);
    return (
        <View style={Styles.MainContainer}>
            <UserList
                users={allMembers}
                navigation={navigation}
                setUsers={undefined}
                none_found={""}
            />
        </View>
    );
};

export default MemberManagementHome;
