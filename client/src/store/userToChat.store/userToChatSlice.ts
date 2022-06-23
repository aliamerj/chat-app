import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface InitialUser {
  userToChat: User[];
}
let initialState: InitialUser = {
  userToChat: [],
};

if (localStorage.getItem("userToChat")) {
  initialState.userToChat = JSON.parse(
    localStorage.getItem("userToChat") || ""
  ).userToChat;
}

const userToChatSlice = createSlice({
  name: "userToChat",
  initialState,
  reducers: {
    ADD_USER_TO_CHAT: (state, action: PayloadAction<User>) => {
      state.userToChat.push({ ...action.payload });
      localStorage.setItem(
        "userToChat",
        JSON.stringify({
          userToChat: state.userToChat,
        })
      );
    },
  },
});
export const { ADD_USER_TO_CHAT } = userToChatSlice.actions;

export default userToChatSlice.reducer;
