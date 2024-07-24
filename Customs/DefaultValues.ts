import { ROLE } from "./Enums";
import { UserType } from "./Types";

const DefaultUser: UserType = {
	_id: null,
	name: "",
	email: "",
	password: "",
	role: ROLE.MEMBER,
	classes: [],
	payments: [],
	phoneNumber: "",
	balance: 0,
};

export { DefaultUser };
