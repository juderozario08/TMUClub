import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const Uri = isAndroid ? `http://10.0.0.26:3000` : `http://127.0.0.1:3000`;
const ClassCreateURI = `${Uri}/classes/create`;
const ClassesURI = `${Uri}/classes`;
const LoginURI = `${Uri}/login`;
const SignUpURI = `${Uri}/signup`;
const UserURI = `${Uri}/users`;
const UsersURI = `${Uri}/users/allRoles`;
const UserRoleURI = `${Uri}/users/role`;
const PaymentURI = `${Uri}/payments`;

export {
    ClassCreateURI,
    ClassesURI,
    UsersURI,
    LoginURI,
    PaymentURI,
    SignUpURI,
    Uri as URI,
    UserURI,
    UserRoleURI,
};
