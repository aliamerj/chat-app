import { START_CONVERSATION } from "../../store/conversation.store/conversationSlice";
import { ContainerStyle, WrapperStyle } from "../../_Styles_/usersToChat.style";
import { useAppDispatch } from "../../store/hooks";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import ConversationUser from "./Conversation.componet";
import { User } from "../../App";

export interface Conversation {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}

const LastChatUsers = ({ user }: { user: User | null }) => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserConversation = async () => {
      try {
        const res = await userRequest.get("/conversation/" + user?._id);
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
          <ConversationUser conversation={c} key={c._id} userAuth={user} />
        </WrapperStyle>
      ))}
    </ContainerStyle>
  );
};

export default LastChatUsers;
