import { ROLE } from "../Customs/Enums";
import { ClassType, PaymentType, UserType } from "../Customs/Types";

let AllMembers: UserType[] = [];
let AllCoaches: UserType[] = [];
let AllTreasurers: UserType[] = [];
let Payments: PaymentType[] = [];
let Classes: ClassType[] = [];
let UserInfo: UserType = {
	name: "",
	email: "",
	password: "",
	role: "",
	classes: [],
	payments: [],
	phoneNumber: "",
	balance: 0,
};

const SetUser = (values: any) => {
	UserInfo = values;
};

const SetAllMembers = (values: any[]) => {
	AllMembers = values;
};

const SetAllCoaches = (values: any[]) => {
	AllCoaches = values;
};

const SetAllTreasurers = (values: any[]) => {
	AllTreasurers = values;
};

const SetPayments = (values: any[]) => {
	Payments = values;
};

const SetClasses = (values: any[]) => {
	Classes = values;
};

const GetUsersByRole = (role: string) => {
	if (role === ROLE.MEMBER) return AllMembers;
	else if (role === ROLE.COACH) return AllCoaches;
	else return AllTreasurers;
};

const SetUsersByRole = (value: any[], role: string) => {
	if (role === ROLE.MEMBER) SetAllMembers(value);
	else if (role === ROLE.COACH) SetAllCoaches(value);
	else SetAllTreasurers(value);
};

export {
	AllMembers,
	AllCoaches,
	AllTreasurers,
	Payments,
	Classes,
	UserInfo,
	SetUser,
	SetAllMembers,
	SetAllCoaches,
	SetAllTreasurers,
	SetPayments,
	SetClasses,
	GetUsersByRole,
	SetUsersByRole,
};
