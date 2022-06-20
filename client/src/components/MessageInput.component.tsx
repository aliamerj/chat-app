import {
  TextareaStyle,
  SendButtonStyle,
  ContainerStyle,
} from "../_Styles_/messageInput.style";

const MessageInput = () => {
  return (
    <>
      <ContainerStyle>
        <TextareaStyle placeholder="Type message here...."></TextareaStyle>
        <SendButtonStyle>Send</SendButtonStyle>
      </ContainerStyle>
    </>
  );
};

export default MessageInput;
