const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/users");
const User = mongoose.model("User");

router.get("/", async (req, res) => {
    const users = await User.find();
    try {
        res.send(users);
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
});

router.post("/", async (req, res) => {
    const { name, email, passsword, phoneNumber } = req.body;
    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
        return res.status(409).send("User already exists. Please login.");
    }
    try {
        await User.create({
            name: name,
            email: email,
            passsword: passsword,
            phoneNumber: phoneNumber,
        });
    } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
    }
    res.send("User created!");
});

module.exports = router;
