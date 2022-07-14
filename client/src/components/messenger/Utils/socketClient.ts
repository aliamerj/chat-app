import { connect } from "socket.io-client";
import { Message, User, UserSoket } from "../../../Types/Types";

export const socket = connect("http://localhost:1000");

export const userJoin = (user: User) => {
  socket.emit("sendUserId", user._id);
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
    reciveMessage(data);
  });
};
type SetOnlineUser = (user: UserSoket[]) => void;
type GetOnlineUser = (setOnlineUser: SetOnlineUser) => void;
export const getOnlineUser: GetOnlineUser = (setOnlineUser) => {
  socket.on("getUsers", (data: UserSoket[]) => {
    setOnlineUser(data);
  });
};
