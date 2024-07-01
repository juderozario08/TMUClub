const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/payments");
const Payment = mongoose.model("Payment");

router.get("/", async (req, res) => {
	try {
		const payments = await Payment.find({});
		res.status(200).send({
			status: true,
			message: "All payments retrieved successfully.",
			payments: payments,
		});
	} catch (err) {
		res.status(500).send({ status: "error", message: err.message });
	}
});

router
	.route("/:id")
	.get(async (req, res) => {
		const { id } = req.params;
		try {
			const payment = await Payment.findById(id);
			if (!payment) return res.status(404).send("Payment not found.");
			res.status(200).send(payment);
		} catch (err) {
			res.status(500).send({ status: "error", message: err.message });
		}
	})
	.put(async (req, res) => {
		const { id } = req.params;
		try {
			const payment = await Payment.findByIdAndUpdate(id, req.body);
			if (!payment) return res.status(404).send("Payment not found.");
			res.status(200).send(payment);
		} catch (err) {
			res.status(500).send({ status: "error", message: err.message });
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params;
		try {
			const payment = await Payment.findByIdAndDelete(id);
			if (!payment) return res.status(404).send("Payment not found.");
			res.status(200).send("Payment deleted successfully.");
		} catch (err) {
			res.status(500).send({ status: "error", message: err.message });
		}
	});

module.exports = router;
