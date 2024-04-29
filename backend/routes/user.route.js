const express = require('express')
const router = express.Router()

router.route('/')
    .get('/', (_, res) => {
        res.send('User List')
    }).post('/', (_, res) => {
        res.send("User Created")
    })

router.route('/:id')
    .get((req, res) => {
        res.send("User Get ID: " + req.params.id)
    }).put((req, res) => {
        res.send("User Updated with ID: " + req.params.id)
    }).delete((req, res) => {
        res.send("User Deleted with ID: " + req.params.id)
    })

module.exports = router
