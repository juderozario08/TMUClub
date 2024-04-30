const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "member",
        roles: ["member", "coach", "treasurer"],
    },
    balance: {
        type: Number,
        default: 0,
    },
}, {
    collection: "User",
});

module.exports = mongoose.model("User", userSchema);
