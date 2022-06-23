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
import message from "../../__FAKE_DATA/message";
import MessageInput from "./MessageInput.component";

interface Message {
  _id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const MessageBox = () => {
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
          <MessageInput conversationId={conversationId} />
        </>
      ) : (
        <span>start chatting </span>
      )}
    </ContainerStyle>
  );
};

export default MessageBox;
