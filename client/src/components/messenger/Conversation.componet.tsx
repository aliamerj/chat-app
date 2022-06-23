import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Ali } from "../../__FAKE_DATA/apiData";
import users from "../../__FAKE_DATA/users";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/usersToChat.style";
import { Avatar } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { ADD_USER_TO_CHAT } from "../../store/userToChat.store/userToChatSlice";
const isOnline = true;
interface Conversation {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const ConversationUser = ({ conversation }: { conversation: Conversation }) => {
  const [user, setuser] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const friendId = conversation.members?.find((member) => member !== Ali._id);
    const getFriend = async () => {
      try {
        const res = await userRequest.get("/user/" + friendId);
        setuser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
    if (user) dispatch(ADD_USER_TO_CHAT(user));
  }, [conversation]);
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
