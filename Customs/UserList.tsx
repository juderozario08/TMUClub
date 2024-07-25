import React, { PropsWithChildren, useEffect, useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { Styles } from "../Colors";
import ModalView from "./ModalView";
import axios from "axios";
import { UserURI } from "../Globals/Routes";
import InputView from "./InputBox";
import { SetRoleBasedChange, SetDashboardChange } from "../Globals/Functions";
import { UserType } from "./Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DefaultUser } from "./DefaultValues";
import { FetchUser } from "../Globals/FetchFunctions";

interface UserListProps {
	users: any[];
	setUsers: any;
	role?: string;
	none_found: string;
}

const UserList: React.FC<PropsWithChildren<UserListProps>> = ({
	users,
	setUsers,
	none_found,
}) => {
	const [selectedUser, setSelectedUser] = useState<UserType>(DefaultUser);
	const [mainUser, setMainUser] = useState<UserType>(DefaultUser);
	const [isChanging, setIsChanging] = useState<boolean>(false);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const changeUser = async () => {
		await axios
			.put(`${UserURI}/${selectedUser._id}`, selectedUser)
			.then((res: any) => {
				SetRoleBasedChange(true);
				SetDashboardChange(true);
				setUsers(res.data.users);
				setIsModalVisible(false);
				console.log(res.data.message);
			})
			.catch((err) => console.log(err.message));
	};

	const deleteUser = async () => {
		if (selectedUser._id === mainUser._id) {
			console.log("Cannot delete main user.");
			return;
		} else {
			await axios
				.delete(`${UserURI}/${selectedUser._id}`)
				.then((res: any) => {
					SetRoleBasedChange(true);
					SetDashboardChange(true);
					setUsers(res.data.users);
					setIsModalVisible(false);
					console.log(res.data.message);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};

	const handleChange = (text: any, type: string) => {
		setSelectedUser((prev: any) => {
			return {
				...prev,
				[type]: text,
			};
		});
	};

	useEffect(() => {
		FetchUser(setMainUser);
	}, []);

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
				<Text style={[Styles.MainSubText, { paddingVertical: 20 }]}>
					No {none_found} found
				</Text>
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
