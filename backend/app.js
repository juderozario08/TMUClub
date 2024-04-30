require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userSignUpRoute = require("./routes/userSignUp");
const userLoginRoute = require("./routes/userLogin");
const userRoute = require("./routes/userSignUp");

app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error: ", err);
    });

app.use("/signup", userSignUpRoute);
app.use("/login", userLoginRoute);
app.use("/users", userRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
