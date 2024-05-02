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
};
