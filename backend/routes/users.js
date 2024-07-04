const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

router.get("/allRoles", async (_, res) => {
	try {
		const users = await User.find({});
		let members = [];
		let coaches = [];
		let treasurers = [];
		for (let i = 0; i < users.length; i++) {
			if (users[i].role === "member") {
				members.push(users[i]);
			} else if (users[i].role === "coach") {
				coaches.push(users[i]);
			} else if (users[i].role === "treasurer") {
				treasurers.push(users[i]);
			}
		}
		res.status(200).send({
			members: members,
			coaches: coaches,
			treasurers: treasurers,
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send({ status: "error", message: err.message });
	}
});

router.get("/role/:role", async (req, res) => {
	try {
		const { role } = req.params;
		const users = await User.find({ role });
		res.status(200).send(users);
	} catch (err) {
		console.log(err.message);
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
		console.log(id);
		try {
			const user = await User.findByIdAndUpdate(id, req.body);
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
