const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")
require("dotenv").config()

const userRoute = require('./mongoose/routes/user')

const PORT = process.env.PORT || 8800

app.use(cors())
app.use(express.json())

mongoose.connect( process.env.MONGODB_URI, {useNewUrlParser: true} )
    .then(() => console.log("DB Connection Successful !"))
    .catch((err) => console.log(err))

app.use('/api/users', userRoute)

app.listen(PORT, () => {
    console.log(`Backend server is listening on port ${PORT} !`)
})