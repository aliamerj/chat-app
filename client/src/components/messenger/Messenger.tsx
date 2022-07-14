import { Conversation, User } from "../../Types/Types";
import "../../_Styles_/messenger/messenger.style.css";
import * as styles from "../../_Styles_/messenger/messenger.style";
import AllUsersToChat from "./AllUsersToChat.component";
import { useState } from "react";
import MessageBox from "./MessageBox.component";
import SearchBoxComponent from "./SearchBox.component";

const Messenger = () => {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [myFriend, setMyFriend] = useState<User | null>(null);
  const [inputSearch, setInput] = useState<string>("");
  const setConversationHandler = (conversation: Conversation) => {
    setConversation(conversation);
  };
  const startNewConversationWith = (user: User) => {
    setMyFriend(user);
  };
  const changeSearchInput = (input: string) => {
    setInput(input);
  };

  return (
    <>
      <styles.ContainerStyle>
        <styles.WrapperStyle>
          <styles.LeftStyle>
            <styles.ItemsContainerStyle>
              <SearchBoxComponent setInputHandler={changeSearchInput} />
              <AllUsersToChat
                setConversationHelper={setConversationHandler}
                startNewConversationWith={startNewConversationWith}
                searchInput={inputSearch}
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
