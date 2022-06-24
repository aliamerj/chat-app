import { Server, Socket } from "socket.io";
interface User {
  userId: string;
  socketId: string;
}
interface SendMessage {
  senderId: string;
  receiverId: string;
  text: string;
}

const ClIENT_URL = "http://localhost:3000";

const io = new Server(1000, {
  cors: {
    origin: ClIENT_URL,
  },
});
let users: User[] = [];

const addUsers = (userId: string, socketId: string) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUsers = (socketId: string) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser: (userId: string) => User | null = (receiverId: string) => {
  const user = users.find((user) => user.userId === receiverId);
  if (user) {
    return user;
  }
  return null;
};
// connection
io.on("connection", (socket: Socket) => {
  console.log("socket connection.....");
  io.emit("welcome", "using socket io :)");
  socket.on("sendUserId", (userId) => {
    addUsers(userId, socket.id);
    io.emit("getUsers", users);
  });
  // disconnect
  socket.on("disconnect", () => {
    console.log("somebody disconnected");
    removeUsers(socket.id);
    io.emit("getUsers", users);
  });
  // send and get message private

  socket.on("sendMessage", ({ senderId, receiverId, text }: SendMessage) => {
    const user = getUser(receiverId);
    if (user)
      io.to(user?.socketId).emit("getMessage", {
        senderId,
        text,
      });
  });
});
