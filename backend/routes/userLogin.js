const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("../models/users");
const User = mongoose.model("User");

router.post("/", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send({
				status: "error",
				message: "User not found.",
			});
		}
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).send({
				status: "error",
				message: "Incorrect password.",
			});
		}
		res.status(200).send({
			status: "success",
			message: "User logged in successfully.",
			id: user._id,
			role: user.role,
			name: user.name,
			email: user.email,
			phoneNumber: user.phoneNumber,
			balance: user.balance,
			classes: user.classes,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send({
			status: "error",
			message: "Internal server error.",
		});
	}
});

module.exports = router;
