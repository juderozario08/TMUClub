import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
	PaymentURI,
	UserRoleURI,
	UserURI,
	UsersURI,
	ClassesURI,
} from "./Routes";
import {
	AllCoaches,
	AllMembers,
	AllTreasurers,
	Classes,
	Payments,
	SetAllCoaches,
	SetAllMembers,
	SetAllTreasurers,
	SetClasses,
	SetPayments,
	SetUser,
	User,
} from "./AppValues";

async function FetchUser(setUser: any) {
	const id = await AsyncStorage.getItem("id");
	if (!id) {
		console.log("User ID not found in AsyncStorage.");
		return;
	}
	await axios
		.get(`${UserURI}/${id}`)
		.then((res: any) => {
			SetUser(res.data);
			setUser(User);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
}

const FetchMembers = async (setAllMembers: any) => {
	await axios
		.get(`${UserRoleURI}/member`)
		.then((res: any) => {
			SetAllMembers(res.data);
			setAllMembers(AllMembers);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

const FetchCoaches = async (setAllCoaches: any) => {
	await axios
		.get(`${UserRoleURI}/coach`)
		.then((res: any) => {
			SetAllCoaches(res.data);
			setAllCoaches(AllCoaches);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

const FetchTreasurers = async (SetAllTreasurers: any) => {
	await axios
		.get(`${UserRoleURI}/treasurer`)
		.then((res: any) => {
			SetAllCoaches(res.data);
			SetAllTreasurers(AllTreasurers);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

const FetchAllUsers = async (
	setAllMembers: any,
	setAllCoaches: any,
	setAllTreaurers: any,
) => {
	await axios
		.get(`${UsersURI}`)
		.then((res: any) => {
			SetAllMembers(res.data.members);
			SetAllCoaches(res.data.coaches);
			SetAllTreasurers(res.data.treasurers);
			setAllMembers(AllMembers);
			setAllCoaches(AllCoaches);
			setAllTreaurers(AllTreasurers);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

const FetchPayments = async (setPayments: any) => {
	await axios
		.get(`${PaymentURI}`)
		.then((res: any) => {
			SetPayments(res.data.members);
			setPayments(Payments);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

const FetchClasses = async (setClasses: any) => {
	await axios
		.get(`${ClassesURI}`)
		.then((res: any) => {
			SetClasses(res.data.members);
			setClasses(Classes);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};
export {
	FetchUser,
	FetchMembers,
	FetchCoaches,
	FetchTreasurers,
	FetchPayments,
	FetchClasses,
	FetchAllUsers,
};
