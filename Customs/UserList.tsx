import React, { PropsWithChildren, useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { Styles } from "../Colors";
import ModalView from "./ModalView";

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
    const [selectedUser, setSelectedUser] = useState<any>({
        id: "" as string,
        name: "" as string,
        email: "" as string,
        phoneNumber: "" as string,
        role: "",
    });
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return (
        <ScrollView
            contentContainerStyle={[Styles.CardsContainer]}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
        >
            {users.length > 0 ? (
                users.map((el: any, index: number) => (
                    <Pressable
                        key={index}
                        style={[Styles.Cards]}
                        onPress={() => {
                            setSelectedUser(el);
                            setIsModalVisible(true);
                        }}
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={Styles.CardsText}>Name: {el.name}</Text>
                            <Text style={Styles.CardsText}>Email: {el.email}</Text>
                        </View>
                    </Pressable>
                ))
            ) : (
                <Text style={Styles.MainSubText}>No {none_found} found</Text>
            )}
            <ModalView
                title={
                    selectedUser.role
                        ? selectedUser.role[0].toUpperCase() + selectedUser.role.slice(1)
                        : ""
                }
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            >
                <View
                    style={[
                        { width: "100%", alignItems: "center", justifyContent: "center" },
                    ]}
                >
                    <Text style={[Styles.ModalText]}>Name: {selectedUser.name}</Text>
                    <Text style={[Styles.ModalText]}>Email: {selectedUser.email}</Text>
                    <Text style={[Styles.ModalText]}>
                        Phone-Number: {selectedUser.phoneNumber}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "stretch",
                            justifyContent: "space-evenly",
                            marginTop: 20,
                        }}
                    >
                        <Pressable
                            style={{ backgroundColor: "lightblue", borderRadius: 20 }}
                        >
                            <Text style={{ padding: 10 }}>Change</Text>
                        </Pressable>
                        <Pressable
                            style={{
                                backgroundColor: "#0284C7",
                                borderRadius: 20,
                            }}
                        >
                            <Text style={{ color: "white", padding: 10 }}>Submit</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: "red", borderRadius: 20 }}>
                            <Text style={{ color: "white", padding: 10 }}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </ModalView>
        </ScrollView>
    );
};

export default UserList;
