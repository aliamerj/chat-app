import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useAppSelector } from "../../store/hooks";
import { format } from "timeago.js";
import {
  ContainerStyle,
  WrapperStyle,
  MessageContenterStyle,
  MessageText,
  MessageUtilsStyle,
  MessageWrapperStyle,
  AvatarStyle,
} from "../../_Styles_/messageBox.style";
import { Ali } from "../../__FAKE_DATA/apiData";
import MessageInput from "./MessageInput.component";
import { io, Socket } from "socket.io-client";
interface ArrivalMessage {
  senderId: string;
  text: string;
  createdAt: number;
}

interface Message {
  _id: string;
  senderId: string;
  text: string;
  createdAt: number;
}
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const MessageBox = () => {
  const [arrivalMessage, setArrivalMessage] = useState<ArrivalMessage | null>(
    null
  );
  const socket = useRef<Socket>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<Message[]>([]);
  const [myFriend, setMyFriend] = useState<User>();
  const conversation = useAppSelector(
    (state) => state.entities.conversation.conversation
  );
  const conversationId = conversation?._id;
  const userToChat = useAppSelector(
    (state) => state.entities.userToChat.userToChat
  );
  const getUserToChatWith = () => {
    const friendId = conversation?.members.find((id) => id !== Ali._id);
    const friend = userToChat.find((friend) => friend._id === friendId);
    setMyFriend(friend);
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (conversationId) {
          const res = await userRequest.get<Message[]>(
            "/message/" + conversationId
          );
          setMessage(res.data);
        }
      } catch (error) {
        console.error("no conv");
      }
    };
    getMessages();
    getUserToChatWith();
  }, [conversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  useEffect(() => {
    socket.current = io("http://localhost:1000");
    socket.current.on("getMessage", (message) => {
      setArrivalMessage({
        senderId: message.senderId,
        text: message.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      conversation?.members.includes(arrivalMessage.senderId) &&
      setMessage((prev) => [
        ...prev,
        {
          senderId: arrivalMessage.senderId,
          text: arrivalMessage.text,
          createdAt: arrivalMessage.createdAt,
          _id: "message_socket",
        },
      ]);
  }, [arrivalMessage]);

  const sendMessage = (message: Message) => {
    setMessage((prev) => [...prev, message]);
  };
  return (
    <ContainerStyle>
      {conversation ? (
        <>
          <WrapperStyle>
            {message.map((message) =>
              message.senderId !== Ali._id ? (
                <MessageContenterStyle
                  key={message._id}
                  own="true"
                  ref={scrollRef}
                >
                  <MessageUtilsStyle own="true">
                    {format(message.createdAt)}
                  </MessageUtilsStyle>
                  <MessageWrapperStyle>
                    <MessageText own="true">{message.text}</MessageText>
                  </MessageWrapperStyle>
                  <AvatarStyle own="true">
                    <Avatar alt={myFriend?.name} src={myFriend?.image} />
                  </AvatarStyle>
                </MessageContenterStyle>
              ) : (
                <MessageContenterStyle
                  key={message._id}
                  own="false"
                  ref={scrollRef}
                >
                  <AvatarStyle own="false">
                    <Avatar alt={Ali.name} src={Ali.image} />
                  </AvatarStyle>
                  <MessageWrapperStyle>
                    <MessageText own="false">{message.text}</MessageText>
                  </MessageWrapperStyle>
                  <MessageUtilsStyle own="false">
                    {format(message.createdAt)}
                  </MessageUtilsStyle>
                </MessageContenterStyle>
              )
            )}
          </WrapperStyle>
          <MessageInput
            conversationId={conversationId}
            friendId={myFriend?._id}
            socket={socket}
            sendMessage={sendMessage}
          />
        </>
      ) : (
        <span>start chatting </span>
      )}
    </ContainerStyle>
  );
};

export default MessageBox;
