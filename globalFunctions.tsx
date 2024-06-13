import React from "react";
import { Eye, EyeOff } from "react-native-feather";

const determineEye = (
	passwordShow: boolean,
	color: string,
): React.JSX.Element => {
	return passwordShow ? (
		<Eye color={color} fill={"none"} />
	) : (
		<EyeOff color={color} fill={"none"} />
	);
};

class Validity {
	static validateEmail(text: string): boolean {
		const emailRegex: RegExp =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return text.toLowerCase().trim().match(emailRegex) ? true : false;
	}
	static validateUsername(text: string): boolean {
		return text.length >= 3;
	}
	static validatePassword(text: string): boolean {
		const passwordRegex: RegExp =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&\.]{8,}$/;
		return text.length >= 8 && text.trim().match(passwordRegex) ? true : false;
	}
	static validatePhoneNumber(text: string): boolean {
		const phoneNumberRegex: RegExp =
			/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		return text.trim().match(phoneNumberRegex) ? true : false;
	}
}

export { Validity };
export { determineEye };
