const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("../models/users");
const User = mongoose.model("User");

router.post("/", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, balance, classes, role } =
            req.body;
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
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: encryptedPassword,
            phoneNumber,
            balance,
            classes,
            role,
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

router.post("/member", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, balance, classes } = req.body;
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
            role: "member",
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
router.post("/coach", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, balance, classes } = req.body;
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
            role: "coach",
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
router.post("/treasurer", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, balance, classes } = req.body;
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
            role: "treasurer",
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
