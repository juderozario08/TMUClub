import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const port = 3000;
const serverIP = `http://10.0.0.26`;
const loginRoute = `login`;
const signUpRoute = `signup`;
const userRoute = `users`;
const classRoute = `classes`;
const paymentRoute = `payments`;

const uri = `${serverIP}:${port}`;
const loginURI = `${serverIP}:${port}/${loginRoute}`;
const signUpURI = `${serverIP}:${port}/${signUpRoute}`;
const userURI = `${serverIP}:${port}/${userRoute}`;
const classURI = `${serverIP}:${port}/${classRoute}`;
const paymentURI = `${serverIP}:${port}/${paymentRoute}`;

const fetchUserInfo = async () => {
    try {
        const id = await AsyncStorage.getItem("id");
        if (!id) {
            console.log("User ID not found in AsyncStorage.");
            return;
        }
        const response = await axios.get(`${userURI}/${id}`);
        return (response.data);
    } catch (error) {
        console.error(error.message);
    }
};

export {
    classRoute,
    classURI,
    loginRoute,
    loginURI,
    paymentRoute,
    paymentURI,
    port,
    serverIP,
    signUpRoute,
    signUpURI,
    uri,
    userRoute,
    userURI,
    fetchUserInfo
};
