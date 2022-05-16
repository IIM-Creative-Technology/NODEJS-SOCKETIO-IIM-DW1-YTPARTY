import { Server as httpServer } from "http";
import { Server, Socket } from "socket.io";

enum SocketEvents {
  CONNECTION = "connection",
  DISCONNECT = "disconnect",
}

export default class SocketServer {
  server: httpServer;
  io: Server;

  constructor(server: httpServer) {
    this.server = server;
    this.io = new Server(this.server);
  }

  handleEvents() {
    console.log("Socket server is running");
    this.io.on(SocketEvents.CONNECTION, (socket: Socket) => {
      console.log("Client connected");

      socket.on(SocketEvents.DISCONNECT, () => {
        console.log("Client disconnected");
      });
    });
  }
}
