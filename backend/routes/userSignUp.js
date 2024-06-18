const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("../models/users");
const User = mongoose.model("User");

router.post("/:role", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, balance, classes } = req.body;
        const { role } = req.params;
        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.status(409).send({
                status: "error",
                message: "A user with that email already exists.",
            });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: encryptedPassword,
            phoneNumber,
            balance,
            classes,
            role: role || "member",
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
