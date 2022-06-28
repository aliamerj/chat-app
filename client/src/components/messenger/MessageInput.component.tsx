import { useState } from "react";
import { userRequest } from "../../requestMethods";
import { useAppSelector } from "../../store/hooks";
import nextId from "react-id-generator";
import { Message } from "../../Types/Types";
import {
  TextareaStyle,
  SendButtonStyle,
  ContainerStyle,
} from "../../_Styles_/messageInput.style";

const MessageInput = ({
  conversationId,
  sendMessage,
}: {
  conversationId: string | null;
  sendMessage: Function;
}) => {
  const authUserId = useAppSelector(
    (state) => state.entities.auth.currentUser?._id
  );
  const [newMessage, setNewMessage] = useState<string>();
  const handleSubmit = (e: React.MouseEvent) => {
    if (conversationId && newMessage && authUserId) {
      e.preventDefault();
      const message: Message = {
        senderId: authUserId,
        text: newMessage,
        conversationId,
        _id: nextId(),
        createdAt: Date.now(),
      };
      sendMessage({ ...message });
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
