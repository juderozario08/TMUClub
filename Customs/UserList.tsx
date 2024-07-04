import React, { PropsWithChildren, useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { Styles } from "../Colors";
import ModalView from "./ModalView";
import axios from "axios";
import { UserURI } from "../Globals/Routes";
import InputView from "./InputBox";

interface UserListProps {
    users: any[];
    setUsers: any;
    navigation: any;
    none_found: string;
}

const UserList: React.FC<PropsWithChildren<UserListProps>> = ({
    users,
    setUsers,
    navigation,
    none_found,
}) => {
    const [selectedUser, setSelectedUser] = useState<any>({
        name: "" as string,
        email: "" as string,
        phoneNumber: "" as string,
        role: "",
    });
    const [isChanging, setIsChanging] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const changeUser = async () => {
        await axios
            .put(`${UserURI}/${selectedUser._id}`, selectedUser)
            .then(() => {
                console.log("User updated");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const deleteUser = async () => {
        await axios
            .delete(`${UserURI}/${selectedUser._id}`)
            .then(() => {
                setUsers(users.filter((el) => el._id !== selectedUser._id));
                console.log("User deleted");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    function handleChange(text: any, type: string) {
        setSelectedUser((prev: any) => {
            return {
                ...prev,
                [type]: text,
            };
        });
    }

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
                    {isChanging ? (
                        <View style={{ gap: 10 }}>
                            <InputView
                                value={selectedUser.name}
                                onChangeText={(text: string) => {
                                    handleChange(text, "name");
                                }}
                                title={"Name"}
                                error={null}
                            />
                            <InputView
                                value={selectedUser.email}
                                onChangeText={(text: string) => {
                                    handleChange(text, "email");
                                }}
                                title={"Name"}
                                error={null}
                            />
                            <InputView
                                value={selectedUser.phoneNumber}
                                onChangeText={(text: string) => {
                                    handleChange(text, "phoneNumber");
                                }}
                                title={"Phone-Number"}
                                error={null}
                            />
                        </View>
                    ) : (
                        <View>
                            <Text style={[Styles.ModalText]}>Name: {selectedUser.name}</Text>
                            <Text style={[Styles.ModalText]}>
                                Email: {selectedUser.email}
                            </Text>
                            <Text style={[Styles.ModalText]}>
                                Phone-Number: {selectedUser.phoneNumber}
                            </Text>
                        </View>
                    )}
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
                            onPress={() => {
                                setIsChanging(!isChanging);
                            }}
                        >
                            <Text style={{ padding: 10 }}>Change</Text>
                        </Pressable>
                        <Pressable
                            style={{
                                backgroundColor: "#0284C7",
                                borderRadius: 20,
                            }}
                            onPress={() => {
                                changeUser();
                                setIsChanging(false);
                            }}
                        >
                            <Text style={{ color: "white", padding: 10 }}>Submit</Text>
                        </Pressable>
                        <Pressable
                            style={{ backgroundColor: "red", borderRadius: 20 }}
                            onPress={() => {
                                deleteUser();
                                setIsModalVisible(false);
                            }}
                        >
                            <Text style={{ color: "white", padding: 10 }}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </ModalView>
        </ScrollView>
    );
};

export default UserList;
