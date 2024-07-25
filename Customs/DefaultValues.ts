import { ROLE } from "./Enums";
import { ClassType, UserType } from "./Types";

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

const DefaultClass: ClassType = {
    _id: null,
    title: "",
    coach: null,
    date: new Date(),
    participants: [],
    cost: 0,
};

export { DefaultUser, DefaultClass };
