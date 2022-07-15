import React, { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useAppSelector } from "../../store/hooks";
import { Conversation, User, UserSoket } from "../../Types/Types";
import { getOnlineUser } from "./Utils/socketClient";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/messenger/usersToChat.style";
import { Avatar } from "@mui/material";
const LastChatComponent = ({
  setConversationHelper,
  startNewConversationWith,
  isFriendOnlineHelper,
  setPageHerlper,
}: {
  setConversationHelper: (conversation: Conversation) => void;
  startNewConversationWith: (user: User) => void;
  isFriendOnlineHelper: (state: boolean) => void;
  setPageHerlper?: (page: number) => void;
}) => {
  const authUserId = useAppSelector(
    (state) => state.entities.auth.currentUser?._id
  );
  const [friends, setFriends] = useState<User[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<string[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const setonlineUser = (onlineUser: UserSoket[]) => {
    setOnlineFriends(onlineUser.map((user) => user.userId));
  };
  useEffect(() => {
    getOnlineUser(setonlineUser);
  }, [onlineFriends, friends]);
  useEffect(() => {
    const getHadChatWith = async () => {
      try {
        const res = await userRequest.get<Conversation[]>(
          `/conversation/${authUserId}`
        );
        setConversations(res.data);
        const friendsIDs: string[] = res.data.flatMap((conversation) =>
          conversation.members.filter((member) => member !== authUserId)
        );
        const getUsers = await userRequest.get<User[]>("/user");
        const userHadChat = getUsers.data.filter(
          (friend) =>
            friend._id !== authUserId && friendsIDs.includes(friend._id)
        );
        setFriends(userHadChat);
      } catch (error) {
        console.log(error);
      }
    };
    getHadChatWith();
  }, []);

  const handelUserToChatWith = async (user: User) => {
    const reChat = conversations.find((conversation) =>
      conversation.members.includes(user._id)
    );
    if (reChat) {
      setConversationHelper(reChat);
      startNewConversationWith(user);
      if (setPageHerlper) setPageHerlper(1);
      if (onlineFriends.includes(user._id)) {
        isFriendOnlineHelper(true);
      }
    }
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

export default LastChatComponent;
