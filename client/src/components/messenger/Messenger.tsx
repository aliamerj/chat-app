import { Conversation, User } from "../../Types/Types";
import "../../_Styles_/messenger/messenger.style.css";
import * as styles from "../../_Styles_/messenger/messenger.style";
import AllUsersToChat from "./AllUsersToChat.component";
import { useState } from "react";
import MessageBox from "./MessageBox.component";
import SearchBoxComponent from "./SearchBox.component";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import RestoreIcon from "@mui/icons-material/Restore";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { ContainerMobileStyle } from "../../_Styles_/mobile/messenger.style";

const Messenger = () => {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [myFriend, setMyFriend] = useState<User | null>(null);
  const [isFriendOnline, setIsFriendOnline] = useState<boolean>(false);
  const [inputSearch, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const setConversationHandler = (conversation: Conversation) => {
    setConversation(conversation);
  };
  const startNewConversationWith = (user: User) => {
    setMyFriend(user);
  };
  const changeSearchInput = (input: string) => {
    setInput(input);
  };
  const isFriendOnlineHelper = (state: boolean) => {
    setIsFriendOnline(state);
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
                isFriendOnlineHelper={isFriendOnlineHelper}
              />
            </styles.ItemsContainerStyle>
          </styles.LeftStyle>
          <styles.CenterStyle>
            <styles.ItemsContainerStyle>
              <MessageBox
                conversation={conversation}
                friend={myFriend}
                isOnlineFriends={isFriendOnline}
              />
            </styles.ItemsContainerStyle>
          </styles.CenterStyle>
          <styles.RightStyle>
            <styles.ItemsContainerStyle>
              <styles.LastChatTitleStyle>Last Chat</styles.LastChatTitleStyle>
            </styles.ItemsContainerStyle>
          </styles.RightStyle>
        </styles.WrapperStyle>
      </styles.ContainerStyle>
      <ContainerMobileStyle>
        {page === 0 ? (
          <styles.LeftStyle>
            <styles.ItemsContainerStyle>
              <SearchBoxComponent setInputHandler={changeSearchInput} />
              <AllUsersToChat
                setConversationHelper={setConversationHandler}
                startNewConversationWith={startNewConversationWith}
                searchInput={inputSearch}
                isFriendOnlineHelper={isFriendOnlineHelper}
              />
            </styles.ItemsContainerStyle>
          </styles.LeftStyle>
        ) : page === 1 ? (
          <styles.CenterStyle>
            <styles.ItemsContainerStyle>
              <MessageBox
                conversation={conversation}
                friend={myFriend}
                isOnlineFriends={isFriendOnline}
              />
            </styles.ItemsContainerStyle>
          </styles.CenterStyle>
        ) : page === 2 ? (
          <styles.RightStyle>
            <styles.ItemsContainerStyle>
              <styles.LastChatTitleStyle>Last Chat</styles.LastChatTitleStyle>
            </styles.ItemsContainerStyle>
          </styles.RightStyle>
        ) : null}
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={page}
            onChange={(event, newValue: number) => {
              setPage(newValue);
            }}
          >
            <BottomNavigationAction label="users" icon={<GroupIcon />} />
            <BottomNavigationAction label="chat" icon={<ChatIcon />} />
            <BottomNavigationAction label="Last Chat" icon={<RestoreIcon />} />
          </BottomNavigation>
        </Paper>
      </ContainerMobileStyle>
    </>
  );
};

export default Messenger;
