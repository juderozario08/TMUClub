const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

router.post("/", async (req, res) => {
    try {
        const { name, email, password, phoneNumber } = req.body;
        if (!name || !email || !password || !phoneNumber) {
            return res.status(400).send({
                status: "error",
                message: "Please provide all required fields.",
            });
        }
        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.status(409).send({
                status: "error",
                message: "A user with that email already exists.",
            });
        }
        await User.create({
            name,
            email,
            password,
            phoneNumber,
        });
        res.status(201).send({
            status: "success",
            message: "User created successfully.",
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: "error",
            message: "Internal server error.",
        });
    }
});

module.exports = router;
