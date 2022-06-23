import { Avatar } from "@mui/material";
import { START_CONVERSATION } from "../../store/conversation.store/conversationSlice";
import users from "../../__FAKE_DATA/users";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/usersToChat.style";
import { useAppDispatch } from "../../store/hooks";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Ali } from "../../__FAKE_DATA/apiData";
import { ADD_USER_TO_CHAT } from "../../store/userToChat.store/userToChatSlice";
import ConversationUser from "./Conversation.componet";
const isOnline = true;
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
interface Conversation {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}

const UsersToChat = () => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserConversation = async () => {
      try {
        const res = await userRequest.get("/conversation/" + Ali._id);
        setConversation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserConversation();
  }, []);

  return (
    <ContainerStyle>
      {conversation.map((c) => (
        <WrapperStyle
          key={c._id}
          onClick={() => dispatch(START_CONVERSATION(c))}
        >
          <ConversationUser conversation={c} key={c._id} />
        </WrapperStyle>
      ))}
    </ContainerStyle>
  );
};

export default UsersToChat;
