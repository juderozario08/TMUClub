require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users");

app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error: ", err);
    });

app.use("/users", userRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
