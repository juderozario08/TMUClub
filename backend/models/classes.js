const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // coach: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
    coach: { type: String, required: true },
    // date: { type: Date, required: true },
    // participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    participants: [{ type: String, required: true }],
}, {
    collection: "Class",
});

module.exports = mongoose.model("Class", classSchema);
