const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/classes");
const Payment = mongoose.model("Payment");

router.post("/", async (req, res) => {
	try {
		const { user, date, card, amount, cls } = req.body;
		const paid = await Payment.findOne({ user, cls, date });
		if (paid) {
			return res.status(409).send({
				status: "error",
				message: "This class has already been paid for.",
			});
		}
		await Payment.create({ user, date, card, amount, cls });
		res.status(200).send({
			status: "success",
			message: "Payment made successfully.",
		});
	} catch (err) {
		console.error(err);
		res.status(500).send({ status: "error", message: err.message });
	}
});

module.exports = router;
