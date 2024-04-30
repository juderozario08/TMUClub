const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        res.status(202).send({
            status: "success",
            message: "User logged in successfully.",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", message: err.message });
    }
});

module.exports = router;
