import { useState } from "react";
import { Socket } from "socket.io-client";
import { userRequest } from "../../requestMethods";
import {
  TextareaStyle,
  SendButtonStyle,
  ContainerStyle,
} from "../../_Styles_/messageInput.style";
import { Ali } from "../../__FAKE_DATA/apiData";

interface Message {
  senderId: string;
  conversationId: string;
  text: string;
}
let generateId = 1000000;
const MessageInput = ({
  conversationId,
  friendId,
  socket,
  sendMessage,
}: {
  conversationId: string | undefined;
  friendId: string | undefined;
  socket: React.MutableRefObject<Socket | undefined>;
  sendMessage: Function;
}) => {
  const [newMessage, setNewMessage] = useState<string>();
  const handleSubmit = (e: React.MouseEvent) => {
    if (conversationId && newMessage) {
      e.preventDefault();
      const message: Message = {
        senderId: Ali._id,
        text: newMessage,
        conversationId,
      };
      generateId = generateId + 1;
      sendMessage({ ...message, _id: generateId });
      postNewMessage(message);
    }
  };
  socket.current?.emit("sendMessage", {
    senderId: Ali._id,
    receiverId: friendId,
    text: newMessage,
  });

  const postNewMessage = async (message: Message) => {
    try {
      await userRequest.post<Message>("/message/", message);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ContainerStyle>
        <TextareaStyle
          placeholder="Type message here...."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        ></TextareaStyle>
        <SendButtonStyle onClick={handleSubmit}>Send</SendButtonStyle>
      </ContainerStyle>
    </>
  );
};
export default MessageInput;
