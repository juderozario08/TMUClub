const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

router.get("/", async (_req, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
	} catch (err) {
		console.log(err);
		res.status(500).send({ status: "error", message: err.message });
	}
});

router
	.route("/:id")
	.get(async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findById(id);
			if (!user) {
				return res.status(404).send("User not found.");
			}
			res.status(200).send(user);
		} catch (err) {
			console.log(err);
			res.status(500).send({ status: "error", message: err.message });
		}
	})
	.put(async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findByIdAndUpdate(id, req.body, { new: true });
			if (!user) {
				return res.status(404).send("User not found.");
			}
			res.status(200).send(user);
		} catch (err) {
			console.log(err);
			res.status(500).send({ status: "error", message: err.message });
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findByIdAndDelete(id);
			if (!user) {
				return res.status(404).send("User not found.");
			}
			res.status(200).send("User deleted successfully.");
		} catch (err) {
			console.log(err);
			res.status(500).send({ status: "error", message: err.message });
		}
	});

module.exports = router;
