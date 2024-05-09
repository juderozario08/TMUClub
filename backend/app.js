require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userSignUpRouter = require("./routes/userSignUp");
const userLoginRouter = require("./routes/userLogin");
const userRouter = require("./routes/users");
const classRouter = require("./routes/classes");
const classSignupRouter = require("./routes/classes");

app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error: ", err);
    });

app.use(`/signup`, userSignUpRouter);
app.use(`/login`, userLoginRouter);
app.use(`/users`, userRouter);
app.use(`/classes`, classRouter);
app.use(`/classes/create`, classSignupRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
