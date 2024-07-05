import { Date } from "mongoose";

type UserType = {
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
	title: string;
	coach: any;
	date: Date;
	participants: any[];
	cost: number;
};

type PaymentType = {
	cls: any;
	user: any;
	card: string;
	date: Date;
	amount: number;
};

export type { UserType, ClassType, PaymentType };
