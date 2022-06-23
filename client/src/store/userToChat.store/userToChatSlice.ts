import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

let initialUser: User | null = null;
if (localStorage.getItem("userToChat")) {
  initialUser = JSON.parse(localStorage.getItem("userToChat") || "").userToChat;
}

const userToChatSlice = createSlice({
  name: "userToChat",
  initialState: initialUser,
  reducers: {
    ADD_USER_TO_CHAT: (state, action: PayloadAction<User>) => {
      state = action.payload;
      localStorage.setItem(
        "userToChat",
        JSON.stringify({
          userToChat: state,
        })
      );
    },
  },
});
export const { ADD_USER_TO_CHAT } = userToChatSlice.actions;

export default userToChatSlice.reducer;
