import { useState } from "react";
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
const MessageInput = ({
  conversationId,
}: {
  conversationId: string | undefined;
}) => {
  const [newMessage, setNewMessage] = useState<string>();
  const handleSubmit = (e: React.MouseEvent) => {
    if (conversationId && newMessage) {
      console.log("conversationId", conversationId);
      console.log("newMessage", newMessage);
      e.preventDefault();
      const message: Message = {
        senderId: Ali._id,
        text: newMessage,
        conversationId,
      };
      postNewMessage(message);
    }
  };

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
