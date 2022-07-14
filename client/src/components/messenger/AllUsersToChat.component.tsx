import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useAppSelector } from "../../store/hooks";
import { Conversation, User, UserSoket } from "../../Types/Types";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/messenger/usersToChat.style";
import { getOnlineUser } from "./Utils/socketClient";

const AllUsersToChat = ({
  setConversationHelper,
  startNewConversationWith,
  searchInput,
  isFriendOnlineHelper,
  setPageHerlper,
}: {
  setConversationHelper: (conversation: Conversation) => void;
  startNewConversationWith: (user: User) => void;
  searchInput: string;
  isFriendOnlineHelper: (state: boolean) => void;
  setPageHerlper?: (page: number) => void;
}) => {
  const authUserId = useAppSelector(
    (state) => state.entities.auth.currentUser?._id
  );
  const [friends, setFriends] = useState<User[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<string[]>([]);
  const setonlineUser = (onlineUser: UserSoket[]) => {
    setOnlineFriends(onlineUser.map((user) => user.userId));
  };
  useEffect(() => {
    getOnlineUser(setonlineUser);
  }, [onlineFriends, friends]);

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
    if (setPageHerlper) setPageHerlper(1);
    if (onlineFriends.includes(user._id)) {
      isFriendOnlineHelper(true);
    }
  };
  return (
    <ContainerStyle>
      {friends
        .filter((friend) => {
          if (searchInput === "") return friend;
          if (friend.name.toLowerCase().includes(searchInput.toLowerCase()))
            return friend;
        })
        .map((friend) => {
          return (
            <WrapperStyle
              key={friend._id}
              onClick={() => handelUserToChatWith(friend)}
            >
              <AvatarsStyle>
                {onlineFriends.includes(friend._id) ? (
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
