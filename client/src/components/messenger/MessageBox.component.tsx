import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import nextId from "react-id-generator";
import { format } from "timeago.js";
import {
  ContainerStyle,
  WrapperStyle,
  MessageContenterStyle,
  MessageText,
  MessageUtilsStyle,
  MessageWrapperStyle,
  AvatarStyle,
} from "../../_Styles_/messenger/messageBox.style";
import MessageInput from "./MessageInput.component";
import { Conversation, Message, User } from "../../Types/Types";
import {
  reciveMessageSocket,
  sendMessageSocket,
  socket,
} from "./Utils/socketClient";

const MessageBox = ({
  conversation,
  friend,
}: {
  conversation: Conversation | null;
  friend: User | null;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const userAuth = useAppSelector((state) => state.entities.auth.currentUser);

  const sendMessage = (message: Message) => {
    if (userAuth && friend) {
      sendMessageSocket(userAuth._id, message.text, friend._id);
    }
    setMessages((prev) => [...prev, message]);
  };

  const reciveMessage = (message: Message) => {
    setMessages((prev) => [
      ...prev,
      { ...message, createdAt: Date.now(), _id: nextId() },
    ]);
    console.log(message);
  };

  useEffect(() => {
    reciveMessageSocket(reciveMessage);
  }, [socket]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ContainerStyle>
      {conversation ? (
        <>
          <WrapperStyle>
            {messages.map((message) =>
              message.senderId !== userAuth?._id ? (
                <MessageContenterStyle
                  key={message._id}
                  own="true"
                  ref={scrollRef}
                >
                  <MessageUtilsStyle own="true">
                    {message.createdAt !== undefined &&
                      format(message.createdAt)}
                  </MessageUtilsStyle>
                  <MessageWrapperStyle>
                    <MessageText own="true">{message.text}</MessageText>
                  </MessageWrapperStyle>
                  <AvatarStyle own="true">
                    <Avatar alt={friend?.name} src={friend?.image} />
                  </AvatarStyle>
                </MessageContenterStyle>
              ) : (
                <MessageContenterStyle
                  key={message._id}
                  own="false"
                  ref={scrollRef}
                >
                  <AvatarStyle own="false">
                    <Avatar alt={userAuth?.name} src={userAuth?.image} />
                  </AvatarStyle>
                  <MessageWrapperStyle>
                    <MessageText own="false">{message.text}</MessageText>
                  </MessageWrapperStyle>
                  <MessageUtilsStyle own="false">
                    {message.createdAt !== undefined &&
                      format(message.createdAt)}
                  </MessageUtilsStyle>
                </MessageContenterStyle>
              )
            )}
          </WrapperStyle>
          <MessageInput
            conversationId={conversation?._id}
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
