import {
  CenterStyle,
  ContainerStyle,
  ItemsContainerStyle,
  LastChatTitleStyle,
  LeftStyle,
  RightStyle,
  SearchFriendStyle,
  WrapperStyle,
} from "../../_Styles_/messemger.style";
import MessageBox from "./MessageBox.component";
import AllUsersToChat from "./AllUsersToChat.component";
import LastChatUsers from "./LastChatUsers.component";

interface User {
  _id: string;
  createdAt: string;
  email: string;
  image: string;
  name: string;
  updatedAt: string;
}

const Messenger = ({ user }: { user: User }) => {
  return (
    <ContainerStyle>
      <WrapperStyle>
        <LeftStyle>
          <ItemsContainerStyle>
            <LastChatTitleStyle>Last Chat</LastChatTitleStyle>
            <LastChatUsers user={user} />
          </ItemsContainerStyle>
        </LeftStyle>
        <CenterStyle>
          <ItemsContainerStyle>
            <MessageBox user={user} />
          </ItemsContainerStyle>
        </CenterStyle>
        <RightStyle>
          <ItemsContainerStyle>
            <SearchFriendStyle placeholder="Search for friends" />
            <AllUsersToChat user={user} />
          </ItemsContainerStyle>
        </RightStyle>
      </WrapperStyle>
    </ContainerStyle>
  );
};

export default Messenger;
