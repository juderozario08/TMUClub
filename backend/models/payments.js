const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
	{
		cls: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Class",
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		card: { type: String, required: true },
		amount: { type: Number, required: true },
		date: { type: Date, required: true },
	},
	{
		collection: "Payments",
	},
);

module.exports = mongoose.model("Payment", paymentSchema);
