import { Avatar } from "@mui/material";

import users from "../../__FAKE_DATA/users";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../../_Styles_/usersToChat.style";
const isOnline = true;

const UsersToChat = () => {
  return (
    <ContainerStyle>
      {users.map((user) => (
        <WrapperStyle key={user.id}>
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
      ))}
    </ContainerStyle>
  );
};

export default UsersToChat;
