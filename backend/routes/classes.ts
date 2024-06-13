const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/classes");
const Class = mongoose.model("Class");

router
    .route("/:id")
    .get(async (req, res) => {
        const { id } = req.params;
        try {
            const cls = await Class.findById(id);
            if (!cls) return res.status(404).send("Class not found.");
            res.status(200).send(cls);
        } catch (err) {
            res.status(500).send({ status: "error", message: err.message });
        }
    })
    .put(async (req, res) => {
        const { id } = req.params;
        try {
            const cls = await Class.findByIdAndUpdate(id, req.body);
            if (!cls) return res.status(404).send("Class not found.");
            res.status(200).send(cls);
        } catch (err) {
            res.status(500).send({ status: "error", message: err.message });
        }
    })
    .delete(async (req, res) => {
        const { id } = req.params;
        try {
            const cls = await Class.findByIdAndDelete(id);
            if (!cls) return res.status(404).send("Class not found.");
            res.status(200).send("Class deleted successfully.");
        } catch (err) {
            res.status(500).send({ status: "error", message: err.message });
        }
    });

router.get("/", (req, res) => {
    
})

module.exports = router;
