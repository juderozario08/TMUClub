const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
    res.send('User List')
})

router.post('/', (_, res) => {
    res.send("User Created")
})

router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send("User Get ID: " + req.params.id)
    }).put((req, res) => {
        res.send("User Updated with ID: " + req.params.id)
    }).delete((req, res) => {
        res.send("User Deleted with ID: " + req.params.id)
    })

const users = [{ name: 'Kyle' }, { name: 'Sally' }, { name: 'Joe' }]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router
