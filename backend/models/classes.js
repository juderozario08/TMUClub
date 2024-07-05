const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        coach: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: { type: Date, required: true },
        participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        cost: { type: Number, required: true },
    },
    {
        collection: "Classes",
    },
);

module.exports = mongoose.model("Class", classSchema);
