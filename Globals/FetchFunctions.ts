import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
    PaymentURI,
    UserRoleURI,
    UserURI,
    UsersURI,
    ClassesURI,
} from "./Routes";
import { ROLE } from "../Customs/Enums";

async function FetchUser(setUser: any) {
    const id = await AsyncStorage.getItem("id");
    if (!id) {
        console.log("User ID not found in AsyncStorage.");
        return;
    }
    await axios
        .get(`${UserURI}/${id}`)
        .then((res: any) => {
            setUser(res.data);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
}

const FetchUsersByRole = async (setUsers: any, role: string) => {
    await axios
        .get(`${UserRoleURI}/${role}`)
        .then((res: any) => {
            setUsers(res.data);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchAllUsers = async (
    setAllMembers: any,
    setAllCoaches: any,
    setAllTreasurers: any,
) => {
    await axios
        .get(`${UsersURI}`)
        .then((res: any) => {
            setAllMembers(res.data.members);
            setAllCoaches(res.data.coaches);
            setAllTreasurers(res.data.treasurers);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchPayments = async (setPayments: any) => {
    await axios
        .get(`${PaymentURI}`)
        .then((res: any) => {
            setPayments(res.data.members);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchClasses = async (setClasses: any) => {
    await axios
        .get(`${ClassesURI}`)
        .then((res: any) => {
            setClasses(res.data.members);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};
export {
    FetchUser,
    FetchPayments,
    FetchClasses,
    FetchAllUsers,
    FetchUsersByRole,
};
