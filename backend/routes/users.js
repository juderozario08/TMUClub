const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/users");
const User = mongoose.model("User");

router.get("/users", async (req, res) => {
    const users = await User.find();
    try {
        res.send(users);
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
});

router.post("/users", async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
        return res.status(409).send("User already exists. Please login.");
    }
    try {
        await User.create({
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
        });
        res.status(201).send({ status: "success", message: "User created." });
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
});

module.exports = router;
