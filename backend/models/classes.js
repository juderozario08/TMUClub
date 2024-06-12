const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        coach: { type: String, required: true },
        // participants: [{ type: String, required: true }],
    },
    {
        collection: "Class",
    },
);

module.exports = mongoose.model("Class", classSchema);
