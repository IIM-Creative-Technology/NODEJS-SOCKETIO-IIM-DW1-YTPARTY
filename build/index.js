"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./socket/server"));
const express = require('express');
const app = express();
const httpServer = require("http").createServer(app);
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const userRoute = require('./mongoose/routes/user');
const socketServer = new server_1.default(httpServer);
socketServer.handleEvents();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("DB Connection Successful !"))
    .catch((err) => console.log(err));
app.use('/api/users', userRoute);
httpServer.listen(PORT, () => {
    console.log(`Backend server is listening on port ${PORT} !`);
});
