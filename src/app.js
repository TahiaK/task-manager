// app.js

const express = require('express')
const app = express()
const tasks = require('./router/task')
const connectDB = require('./db/connection')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => { 
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

