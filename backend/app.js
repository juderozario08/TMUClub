const app = require('express')()

app.get('/', (_, res) => {
    res.status(500).send("Server Failed To Load")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)
