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
    if (role === "member") return AllMembers;
    else if (role === "coach") return AllCoaches;
    else if (role === "treasurer") return AllTreasurers;
    else return [];
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
};
