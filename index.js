import SocketServer from './socket/server'

const express = require('express')
const app = express()
const httpServer = require("http").createServer(app);
const mongoose = require('mongoose')
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 8080
const userRoute = require('./mongoose/routes/user')

const socketServer = new SocketServer(httpServer)
socketServer.handleEvents();

app.use(cors())
app.use(express.json())

mongoose.connect( process.env.MONGODB_URI, {useNewUrlParser: true} )
    .then(() => console.log("DB Connection Successful !"))
    .catch((err) => console.log(err))

app.use('/api/users', userRoute)

httpServer.listen(PORT, () => {
    console.log(`Backend server is listening on port ${PORT} !`)
})