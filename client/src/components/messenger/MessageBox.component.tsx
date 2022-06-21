import { Avatar } from "@mui/material";
import {
  ContainerStyle,
  WrapperStyle,
  MessageContenterStyle,
  MessageText,
  MessageUtilsStyle,
  MessageWrapperStyle,
  AvatarStyle,
} from "../../_Styles_/messageBox.style";
import message from "../../__FAKE_DATA/message";
import MessageInput from "./MessageInput.component";

const myIdUser = 3;

const MessageBox = () => {
  return (
    <ContainerStyle>
      <WrapperStyle>
        {message.map((message) =>
          message.from.id !== myIdUser ? (
            <MessageContenterStyle key={message.id} own="true">
              <MessageUtilsStyle own="true">{message.time}</MessageUtilsStyle>
              <MessageWrapperStyle>
                <MessageText own="true">{message.message}</MessageText>
              </MessageWrapperStyle>
              <AvatarStyle own="true">
                <Avatar alt={message.from.name} src={message.from.image} />
              </AvatarStyle>
            </MessageContenterStyle>
          ) : (
            <MessageContenterStyle key={message.id} own="false">
              <AvatarStyle own="false">
                <Avatar alt={message.from.name} src={message.from.image} />
              </AvatarStyle>
              <MessageWrapperStyle>
                <MessageText own="false">{message.message}</MessageText>
              </MessageWrapperStyle>
              <MessageUtilsStyle own="false">{message.time}</MessageUtilsStyle>
            </MessageContenterStyle>
          )
        )}
      </WrapperStyle>
      <MessageInput />
    </ContainerStyle>
  );
};

export default MessageBox;
