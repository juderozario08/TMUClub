let AllMembers: any[] = [];
let AllCoaches: any[] = [];
let AllTreasurers: any[] = [];
let Payments: any[] = [];
let Classes: any[] = [];
let User: any = {
    name: "",
    email: "",
    password: "",
    role: "",
    classes: [],
    payments: [],
    balance: 0,
};

const SetUser = (values: any) => {
    User = values;
    console.log(User);
};

const SetAllMembers = (values: any[]) => {
    AllMembers = values;
};

const SetAllCoaches = (values: any[]) => {
    AllCoaches = values;
};

const SetAllTreasurers = (values: any[]) => {
    AllTreasurers = values;
};

const SetPayments = (values: any[]) => {
    Payments = values;
};

const SetClasses = (values: any[]) => {
    Classes = values;
};

export {
    AllMembers,
    AllCoaches,
    AllTreasurers,
    Payments,
    Classes,
    User,
    SetUser,
    SetAllMembers,
    SetAllCoaches,
    SetAllTreasurers,
    SetPayments,
    SetClasses,
};
