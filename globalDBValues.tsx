import axios from "axios";
import { userURI } from "./globalRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userInfo: any = {
	name: "",
	email: "",
	phoneNumber: "",
	role: "",
	id: "",
	classes: [],
};

const userClasses: any[] = [];
const allMembers: any[] = [];
const allCoaches: any[] = [];
const allTreasurers: any[] = [];
const allClasses: any[] = [];

function setUserInfo(user: any) {
	userInfo.name = user.name;
	userInfo.email = user.email;
	userInfo.phoneNumber = user.phoneNumber;
	userInfo.role = user.role;
	userInfo.id = user._id;
}

const fetchUsers = async () => {
	const res = await axios.get(`${userURI}`);
	for (let i = 0; i < res.data.length; i++) {
		if (res.data[i].role === "member") {
			allMembers.push(res.data[i]);
		} else if (res.data[i].role === "coach") {
			allCoaches.push(res.data[i]);
		} else if (res.data[i].role === "treasurer") {
			allTreasurers.push(res.data[i]);
		}
	}
};

const fetchUserInfo = async () => {
	try {
		const id = await AsyncStorage.getItem("id");
		if (!id) console.error("User ID not found in AsyncStorage.");
		const response = await axios.get(`${userURI}/${id}`);
		setUserInfo(response.data);
	} catch (error: any) {
		console.error(error.message);
	}
};

export {
	userInfo,
	userClasses,
	allCoaches,
	allTreasurers,
	allMembers,
	allClasses,
	setUserInfo,
	fetchUsers,
	fetchUserInfo,
};
