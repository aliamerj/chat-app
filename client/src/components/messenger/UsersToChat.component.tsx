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
import { useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Ali } from "../../__FAKE_DATA/apiData";
import { ADD_USER_TO_CHAT } from "../../store/userToChat.store/userToChatSlice";
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
  const [userToChat, setUserToChat] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  useMemo(async () => {
    if (userToChat) {
      dispatch(ADD_USER_TO_CHAT(userToChat));
      const res = await userRequest.post<Conversation>("/conversation", {
        senderId: Ali._id,
        receiverId: userToChat._id,
      });
      dispatch(START_CONVERSATION(res.data));
      return res.data;
    }
  }, [userToChat]);

  return (
    <ContainerStyle>
      {users.map((user) => {
        if (user._id !== Ali._id) {
          return (
            <WrapperStyle key={user._id} onClick={() => setUserToChat(user)}>
              <AvatarsStyle>
                {isOnline ? (
                  <StyledBadgeStyle
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt={user.name} src={user.image} />
                  </StyledBadgeStyle>
                ) : (
                  <Avatar alt={user.name} src={user.image} />
                )}
              </AvatarsStyle>
              <UsernameStyle>{user.name}</UsernameStyle>
            </WrapperStyle>
          );
        }
      })}
    </ContainerStyle>
  );
};

export default UsersToChat;
