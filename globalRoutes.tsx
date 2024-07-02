import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const uri = isAndroid ? `http://10.0.0.26:3000` : `http://127.0.0.1:3000`;
const classCreateURI = `${uri}/classes/create`;
const classURI = `${uri}/classes`;
const loginURI = `${uri}/login`;
const signUpURI = `${uri}/signup`;
const userURI = `${uri}/users`;
const usersURI = `${uri}/users/allRoles`;
const userRoleURI = `${uri}/users/role`;
const paymentURI = `${uri}/payment`;

export {
    classCreateURI,
    classURI,
    usersURI,
    loginURI,
    paymentURI,
    signUpURI,
    uri,
    userURI,
    userRoleURI,
};
