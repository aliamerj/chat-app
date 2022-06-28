import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useAppSelector } from "../../store/hooks";
import { Conversation, User } from "../../Types/Types";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/messenger/usersToChat.style";
const isOnline = true;
const AllUsersToChat = ({
  setConversationHelper,
  startNewConversationWith,
}: {
  setConversationHelper: (conversation: Conversation) => void;
  startNewConversationWith: (user: User) => void;
}) => {
  const authUserId = useAppSelector(
    (state) => state.entities.auth.currentUser?._id
  );
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await userRequest.get<User[]>("/user");
        const allUser = res.data.filter((friend) => friend._id !== authUserId);
        setFriends(allUser);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  const handelUserToChatWith = async (user: User) => {
    const res = await userRequest.post<Conversation>("/conversation", {
      senderId: authUserId,
      receiverId: user._id,
    });
    setConversationHelper(res.data);
    startNewConversationWith(user);
  };

  return (
    <ContainerStyle>
      {friends.map((friend) => {
        return (
          <WrapperStyle
            key={friend._id}
            onClick={() => handelUserToChatWith(friend)}
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
