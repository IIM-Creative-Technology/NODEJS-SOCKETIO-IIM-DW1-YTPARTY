import {createServer, Server as httpServer} from "http";
import { Server, Socket } from "socket.io";

enum SocketEvents {
  CONNECTION = "connection",
  DISCONNECT = "disconnect",
}

export default class SocketServer {
  server: httpServer;
  io : Server;
  port: number;

  constructor(port: number) {
    this.server = createServer();
    this.io = new Server(this.server);
    this.port = port;
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });

    this.handleEvents();
  }

  handleEvents() {
    this.io.on(SocketEvents.CONNECTION, (socket: Socket) => {
      console.log("Client connected");

      socket.on(SocketEvents.DISCONNECT, () => {
        console.log("Client disconnected");
      });

      socket.on(SocketEvents.MESSAGE, (message) => {
        console.log(message);
        this.io.emit("message", message);
      });
    });
  }
}