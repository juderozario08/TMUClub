import { ClassType, PaymentType, UserType } from "../Customs/Types";

let AllMembers: UserType[] = [];
let AllCoaches: UserType[] = [];
let AllTreasurers: UserType[] = [];
let Payments: PaymentType[] = [];
let Classes: ClassType[] = [];
let User: UserType = {
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
	User = values;
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

export {
	AllMembers,
	AllCoaches,
	AllTreasurers,
	Payments,
	Classes,
	User,
	SetUser,
	SetAllMembers,
	SetAllCoaches,
	SetAllTreasurers,
	SetPayments,
	SetClasses,
};
