import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "../../App";
import { userRequest } from "../../requestMethods";
import { START_CONVERSATION } from "../../store/conversation.store/conversationSlice";
import { useAppDispatch } from "../../store/hooks";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/usersToChat.style";
import { Conversation } from "./LastChatUsers.component";
const isOnline = true;
const AllUsersToChat = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await userRequest.get<User[]>("/user");
        const allUser = res.data.filter((friend) => friend._id !== user._id);
        setFriends(allUser);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  const setNewConversation = async (friend: User) => {
    try {
      const res = await userRequest.post<Conversation>("/conversation", {
        senderId: user._id,
        receiverId: friend._id,
      });
      dispatch(START_CONVERSATION(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerStyle>
      {friends.map((friend) => {
        return (
          <WrapperStyle
            key={friend._id}
            onClick={() => setNewConversation(friend)}
          >
            <AvatarsStyle>
              {isOnline ? (
                <StyledBadgeStyle
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt={friend.name} src={friend.image} />
                </StyledBadgeStyle>
              ) : (
                <Avatar alt={friend.name} src={friend.image} />
              )}
            </AvatarsStyle>
            <UsernameStyle>{friend.name}</UsernameStyle>
          </WrapperStyle>
        );
      })}
    </ContainerStyle>
  );
};

export default AllUsersToChat;
