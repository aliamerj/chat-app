import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/usersToChat.style";
import { Ali } from "../../__FAKE_DATA/apiData";
const isOnline = true;
const userId = Ali._id;
interface Conversion {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}
interface User {
  _id: string;
  name: string;
  createdAt: string;
  image: string;
  updatedAt: string;
}

const UsersHadconvWith = () => {
  const [friends, setFriends] = useState<User[]>([]);
  let filltes: string[] = [];

  useEffect(() => {
    const getUserConversation = async () => {
      try {
        const res = await userRequest.get<Conversion[]>(
          "/conversation/" + userId
        );

        res.data.map(async (user) => {
          const friendId = user.members.find((id) => id !== userId);
          if (friendId) {
            const getFriend = await userRequest.get<User>("/user/" + friendId);
            setFriends((state) => [...state, getFriend.data]);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUserConversation();
  }, []);

  return (
    <ContainerStyle>
      {friends.map((friend) => {
        if (!filltes.includes(friend._id) && friend._id) {
          filltes.push(friend._id);
          return (
            <WrapperStyle key={friend._id}>
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
        }
      })}
    </ContainerStyle>
  );
};

export default UsersHadconvWith;
