const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/classes");
const Class = mongoose.model("Class");

router.post("/", async (req, res) => {
    try {
        const { title, coach } = req.body;
        console.log({ title, coach });
        await Class.create({ title, coach });
        res.status(200).send({
            status: "success",
            message: "Class created successfully.",
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "error", message: err.message });
    }
});

module.exports = router;
