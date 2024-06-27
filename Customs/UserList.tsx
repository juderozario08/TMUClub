import React, { PropsWithChildren } from "react";

import { Text, View, ScrollView } from "react-native";
import { Styles } from "../Colors";

interface UserListProps {
    users: any[];
    navigation: any;
    none_found: string;
}

const UserList: React.FC<PropsWithChildren<UserListProps>> = ({
    users,
    navigation,
    none_found,
}) => {
    return (
        <ScrollView
            contentContainerStyle={[Styles.CardsContainer]}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
        >
            {users.length > 0 ? (
                users.map((el: any, index: number) => (
                    <View key={index} style={[Styles.Cards]}>
                        <View style={{ padding: 10 }}>
                            <Text style={Styles.CardsText}>Name: {el.name}</Text>
                            <Text style={Styles.CardsText}>Email: {el.email}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={Styles.MainSubText}>No {none_found} found</Text>
            )}
        </ScrollView>
    );
};

export default UserList;
