const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        role: {
            type: String,
            default: "member",
        },
        balance: { type: Number, default: 0 },
        classes: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: false },
        ],
        payments: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Payment", required: false },
        ],
    },
    {
        collection: "User",
    },
);

module.exports = mongoose.model("User", userSchema);
