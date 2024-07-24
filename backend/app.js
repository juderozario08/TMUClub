require("dotenv").config();
const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");

const userSignUpRouter = require("./routes/userSignUp");
const userLoginRouter = require("./routes/userLogin");
const userRouter = require("./routes/users");
const classRouter = require("./routes/classes");
const classSignupRouter = require("./routes/classCreate");
const paymentRouter = require("./routes/payments");

app.use(require("express").json());
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
app.use(`/payments`, paymentRouter);

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
