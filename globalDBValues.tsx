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

export {
	userInfo,
	userClasses,
	allCoaches,
	allTreasurers,
	allMembers,
	allClasses,
	setUserInfo,
};
