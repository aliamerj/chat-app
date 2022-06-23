import { combineReducers } from "@reduxjs/toolkit";
import conversationReducer from "./conversation.store/conversationSlice";
import userToChatReducer from "./userToChat.store/userToChatSlice";

export default combineReducers({
  conversation: conversationReducer,
  userToChat: userToChatReducer,
});
