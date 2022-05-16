"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
var SocketEvents;
(function (SocketEvents) {
    SocketEvents["CONNECTION"] = "connection";
    SocketEvents["DISCONNECT"] = "disconnect";
})(SocketEvents || (SocketEvents = {}));
class SocketServer {
    constructor(server) {
        this.server = server;
        this.io = new socket_io_1.Server(this.server);
    }
    handleEvents() {
        console.log("Socket server is running");
        this.io.on(SocketEvents.CONNECTION, (socket) => {
            console.log("Client connected");
            socket.on(SocketEvents.DISCONNECT, () => {
                console.log("Client disconnected");
            });
        });
    }
}
exports.default = SocketServer;
