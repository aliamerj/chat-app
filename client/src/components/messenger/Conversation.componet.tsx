import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {
  AvatarsStyle,
  StyledBadgeStyle,
  UsernameStyle,
} from "../../_Styles_/usersToChat.style";
import { Avatar } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { ADD_USER_TO_CHAT } from "../../store/userToChat.store/userToChatSlice";
import { Conversation } from "./LastChatUsers.component";
import { User } from "../../App";
const isOnline = true;

const ConversationUser = ({
  conversation,
  userAuth,
}: {
  conversation: Conversation;
  userAuth: User | null;
}) => {
  const [user, setuser] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getFriend = async () => {
      const friendId = conversation.members?.find(
        (member) => member !== userAuth?._id
      );
      try {
        const res = await userRequest.get("/user/" + friendId);
        setuser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
    if (user) dispatch(ADD_USER_TO_CHAT(user));
  }, []);

  return (
    <>
      <AvatarsStyle>
        {isOnline ? (
          <StyledBadgeStyle
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={user?.name} src={user?.image} />
          </StyledBadgeStyle>
        ) : (
          <Avatar alt={user?.name} src={user?.image} />
        )}
      </AvatarsStyle>
      <UsernameStyle>{user?.name}</UsernameStyle>
    </>
  );
};

export default ConversationUser;
