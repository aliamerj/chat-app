import { Conversation, User } from "../../Types/Types";
import * as styles from "../../_Styles_/messemger.style";
import AllUsersToChat from "./AllUsersToChat.component";
import { useState } from "react";
import MessageBox from "./MessageBox.component";

const Messenger = () => {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [myFriend, setMyFriend] = useState<User | null>(null);
  const setConversationHandler = (conversation: Conversation) => {
    setConversation(conversation);
  };
  const startNewConversationWith = (user: User) => {
    setMyFriend(user);
  };

  return (
    <>
      <styles.ContainerStyle>
        <styles.WrapperStyle>
          <styles.LeftStyle>
            <styles.ItemsContainerStyle>
              <styles.SearchFriendStyle placeholder="Search for friends" />
              <AllUsersToChat
                setConversationHelper={setConversationHandler}
                startNewConversationWith={startNewConversationWith}
              />
            </styles.ItemsContainerStyle>
          </styles.LeftStyle>
          <styles.CenterStyle>
            <styles.ItemsContainerStyle>
              <MessageBox conversation={conversation} friend={myFriend} />
            </styles.ItemsContainerStyle>
          </styles.CenterStyle>
          <styles.RightStyle>
            <styles.ItemsContainerStyle>
              <styles.LastChatTitleStyle>Last Chat</styles.LastChatTitleStyle>
            </styles.ItemsContainerStyle>
          </styles.RightStyle>
        </styles.WrapperStyle>
      </styles.ContainerStyle>
    </>
  );
};

export default Messenger;
