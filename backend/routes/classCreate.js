const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/classes");
const Class = mongoose.model("Class");

router.post("/", async (req, res) => {
	try {
		const { title, coach, date, participants } = req.body;
		const cls = await Class.findOne({ title, coach, date, participants });
		if (cls) {
		   return res.status(409).send({
		       status: "error",
		       message: "This class already exists.",
		   });
		}
		if (!title || !coach || !date || !participants) {
		   return res.status(400).send({
		       status: "error",
		       message: "Please provide all required fields.",
		   });
		}
		if (participants.length < 1) {
		   return res.status(400).send({
		       status: "error",
		       message: "Please provide at least one participant.",
		   });
		}
		if (participants.includes(coach)) {
		   return res.status(400).send({
		       status: "error",
		       message: "The coach cannot be a participant.",
		   });
		}
		if (new Date(date) < new Date()) {
		   return res.status(400).send({
		       status: "error",
		       message: "The date cannot be in the past.",
		   });
		}
		const oldTitle = await Class.findOne({ title });
		if (oldTitle) {
			return res.status(409).send({
				status: "error",
				message: "A class with that title already exists.",
			});
		}
		await Class.create({ title, coach, date, participants });
		res.status(200).send({
			status: "success",
			message: "Class created successfully.",
		});
	} catch (err) {
		console.error(err);
		res.status(500).send({ status: "error", message: err.message });
	}
});

module.exports = router;
