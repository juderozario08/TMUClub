import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
    PaymentURI,
    UserRoleURI,
    UserURI,
    UsersURI,
    ClassesURI,
} from "./Routes";
import {
    SetAllCoaches,
    SetAllMembers,
    SetAllTreasurers,
    SetClasses,
    SetPayments,
    SetUser,
    User,
} from "./AppValues";

async function FetchUser() {
    const id = await AsyncStorage.getItem("id");
    if (!id) {
        console.log("User ID not found in AsyncStorage.");
    }
    await axios
        .get(`${UserURI}/${id}`)
        .then((res: any) => {
            SetUser(res.data);
            console.log(User);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
}

const FetchMembers = async () => {
    await axios
        .get(`${UserRoleURI}/member`)
        .then((res: any) => {
            SetAllMembers(res.data);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchCoaches = async () => {
    await axios
        .get(`${UserRoleURI}/coach`)
        .then((res: any) => {
            SetAllCoaches(res.data);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchTreasurers = async () => {
    await axios
        .get(`${UserRoleURI}/treasurer`)
        .then((res: any) => {
            SetAllCoaches(res.data);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchAllUsers = async () => {
    await axios
        .get(`${UsersURI}`)
        .then((res: any) => {
            SetAllMembers(res.data.members);
            SetAllCoaches(res.data.coaches);
            SetAllTreasurers(res.data.treasurers);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchPayments = async () => {
    await axios
        .get(`${PaymentURI}`)
        .then((res: any) => {
            SetPayments(res.data.members);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};

const FetchClasses = async () => {
    await axios
        .get(`${ClassesURI}`)
        .then((res: any) => {
            SetClasses(res.data.members);
        })
        .catch((err: any) => {
            console.log(err.message);
        });
};
export {
    FetchUser,
    FetchMembers,
    FetchCoaches,
    FetchTreasurers,
    FetchPayments,
    FetchClasses,
    FetchAllUsers,
};
