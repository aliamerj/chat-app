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
  StartChatStyle,
  HeaderContainerStyle,
} from "../../_Styles_/messenger/messageBox.style";
import MessageInput from "./MessageInput.component";
import { Conversation, Message, User } from "../../Types/Types";
import {
  reciveMessageSocket,
  sendMessageSocket,
  socket,
} from "./Utils/socketClient";
import {
  AvatarsStyle,
  StyledBadgeStyle,
  UsernameStyle,
} from "../../_Styles_/messenger/usersToChat.style";

const MessageBox = ({
  conversation,
  friend,
  isOnlineFriends,
}: {
  conversation: Conversation | null;
  friend: User | null;
  isOnlineFriends: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const userAuth: User | null = useAppSelector(
    (state) => state.entities.auth.currentUser
  );

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
          <HeaderContainerStyle>
            <AvatarsStyle>
              {isOnlineFriends ? (
                <StyledBadgeStyle
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt={friend?.name} src={friend?.image} />
                </StyledBadgeStyle>
              ) : (
                <Avatar alt={friend?.name} src={friend?.image} />
              )}
            </AvatarsStyle>
            <UsernameStyle>{friend?.name}</UsernameStyle>
          </HeaderContainerStyle>
          <WrapperStyle>
            {messages.map((message) =>
              message.senderId !== userAuth?._id &&
              message.conversationId === conversation._id ? (
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
              ) : message.conversationId === conversation._id ? (
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
              ) : null
            )}
          </WrapperStyle>
          <MessageInput
            conversationId={conversation?._id}
            sendMessage={sendMessage}
          />
        </>
      ) : (
        <StartChatStyle>Start New Conversation </StartChatStyle>
      )}
    </ContainerStyle>
  );
};

export default MessageBox;
