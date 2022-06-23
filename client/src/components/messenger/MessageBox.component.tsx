import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
interface Message {
  _id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

const MessageBox = () => {
  const [message, setMessage] = useState<Message[]>([]);
  const conversation = useAppSelector((state) => state.entities.conversation);
  const userToChat = useAppSelector((state) => state.entities.userToChat);

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (conversation) {
          const res = await userRequest.get<Message[]>(
            "/message/" + conversation._id
          );
          setMessage(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getMessages();
  }, [conversation]);

  return (
    <ContainerStyle>
      <WrapperStyle>
        {conversation ? (
          message.map((message) =>
            message.senderId === Ali._id ? (
              <MessageContenterStyle key={message._id} own="true">
                <MessageUtilsStyle own="true">
                  {format(message.createdAt)}
                </MessageUtilsStyle>
                <MessageWrapperStyle>
                  <MessageText own="true">{message.text}</MessageText>
                </MessageWrapperStyle>
                <AvatarStyle own="true">
                  <Avatar alt={userToChat?.name} src={userToChat?.image} />
                </AvatarStyle>
              </MessageContenterStyle>
            ) : (
              <MessageContenterStyle key={message._id} own="false">
                <AvatarStyle own="false">
                  <Avatar alt={userToChat?.name} src={userToChat?.image} />
                </AvatarStyle>
                <MessageWrapperStyle>
                  <MessageText own="false">{message.text}</MessageText>
                </MessageWrapperStyle>
                <MessageUtilsStyle own="false">
                  {format(message.createdAt)}
                </MessageUtilsStyle>
              </MessageContenterStyle>
            )
          )
        ) : (
          <span>start chatting </span>
        )}
      </WrapperStyle>
      <MessageInput />
    </ContainerStyle>
  );
};

export default MessageBox;
