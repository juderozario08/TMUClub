import { Date } from "mongoose";

type UserType = {
    _id: any;
    name: string;
    email: string;
    password: string;
    role: string;
    classes: any[];
    payments: any[];
    balance: number;
    phoneNumber: string;
};

type ClassType = {
    _id: any;
    title: string;
    coach: any;
    date: Date;
    participants: any[];
    cost: number;
};

type PaymentType = {
    _id: any;
    cls: any;
    user: any;
    card: string;
    date: Date;
    amount: number;
};

type DrawerNavType = {
    UserDashboard: undefined;
    MemberManagement: { role: string; action: number };
    CoachManagement: { role: string; action: number };
    TreasurerManagement: { role: string; action: number };
};

type StackNavType = {
    Login: undefined;
    SignUp: undefined;
    MemberScreen: undefined;
    CoachScreen: undefined;
    TreasurerScreen: undefined;
};

type DefaultParamList = {};

export type {
    UserType,
    ClassType,
    PaymentType,
    DefaultParamList,
    DrawerNavType,
    StackNavType,
};
