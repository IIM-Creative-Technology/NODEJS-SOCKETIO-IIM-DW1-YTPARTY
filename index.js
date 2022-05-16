const express = require('express')
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
    console.log(`Backend server is listening on port ${PORT} !`)
})