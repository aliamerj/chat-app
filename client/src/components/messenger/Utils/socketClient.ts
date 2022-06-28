import { connect } from "socket.io-client";
import { Message, User } from "../../../Types/Types";

export const socket = connect("http://localhost:1000");

export const userJoin = (user: User) => {
  socket.emit("sendUserId", user._id);
  socket.on("getUsers", (data) => {
    console.log(data);
  });
};
export const sendMessageSocket = (
  senderId: string,
  text: string,
  receiverId: string
) => {
  socket.emit("sendMessage", {
    senderId,
    text,
    receiverId,
  });
};
type ReciveMessage = (message: Message) => void;
type ReciveMessageSocket = (reciveMessage: ReciveMessage) => void;

export const reciveMessageSocket: ReciveMessageSocket = (reciveMessage) => {
  socket.on("getMessage", (data: Message) => {
    console.log("message", data);
    reciveMessage(data);
  });
};
