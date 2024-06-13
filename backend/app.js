require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userSignUpRouter = require("./routes/userSignUp");
const userLoginRouter = require("./routes/userLogin");
const userRouter = require("./routes/users");
const classRouter = require("./routes/classes");
const classSignupRouter = require("./routes/classCreate");

app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log("Error: ", err);
	});

app.use(`/signup`, userSignUpRouter);
app.use(`/login`, userLoginRouter);
app.use(`/users`, userRouter);
app.use(`/classes`, classRouter);
app.use(`/classes/create`, classSignupRouter);
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // Change '*' to the appropriate origin(s) in production
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});
const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
