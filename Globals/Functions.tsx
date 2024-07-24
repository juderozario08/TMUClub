import React from "react";
import { Eye, EyeOff } from "react-native-feather";

const determineEye = (show: boolean): React.JSX.Element => {
	return show ? (
		<Eye color={"darkgray"} fill={"none"} />
	) : (
		<EyeOff color={"darkgray"} fill={"none"} />
	);
};

const determineEyeWithColor = (
	valid: boolean,
	show: boolean,
): React.JSX.Element => {
	const col = valid ? "green" : "red";
	return show ? (
		<Eye fill={"none"} stroke={col} />
	) : (
		<EyeOff fill={"none"} stroke={col} />
	);
};

let RoleBasedChange: boolean = false;

const SetRoleBasedChange = (change: boolean): void => {
	RoleBasedChange = change;
};

let DashboardChange: boolean = false;

const SetDashboardChange = (change: boolean): void => {
	DashboardChange = change;
};

const emailRegex: RegExp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex: RegExp =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&\.]{8,}$/;
const phoneNumberRegex: RegExp =
	/^[0-9][0-9][0-9]-?[0-9][0-9][0-9]-?[0-9][0-9][0-9][0-9]$/;

export {
	emailRegex,
	passwordRegex,
	phoneNumberRegex,
	RoleBasedChange,
	DashboardChange,
	determineEye,
	determineEyeWithColor,
	SetRoleBasedChange,
	SetDashboardChange,
};
