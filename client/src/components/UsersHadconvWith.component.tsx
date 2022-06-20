import { Avatar } from "@mui/material";
import {
  AvatarsStyle,
  ContainerStyle,
  StyledBadgeStyle,
  UsernameStyle,
  WrapperStyle,
} from "../_Styles_/usersToChat.style";
import message from "../__FAKE_DATA/message";
const isOnline = true;
const myIdUser = 3;
const UsersHadconvWith = () => {
  return (
    <ContainerStyle>
      {message.map((message) => {
        if (message.to.id === myIdUser)
          return (
            <WrapperStyle key={message.id}>
              <AvatarsStyle>
                {isOnline ? (
                  <StyledBadgeStyle
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt={message.from.name} src={message.from.image} />
                  </StyledBadgeStyle>
                ) : (
                  <Avatar alt={message.from.name} src={message.from.image} />
                )}
              </AvatarsStyle>
              <UsernameStyle>{message.from.name}</UsernameStyle>
            </WrapperStyle>
          );
      })}
    </ContainerStyle>
  );
};

export default UsersHadconvWith;
