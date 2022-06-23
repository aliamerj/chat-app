import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
interface Conversation {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}

let initialConversation: Conversation | null = null;
if (localStorage.getItem("conversation")) {
  initialConversation = JSON.parse(localStorage.getItem("conversation") || "")
    .conversation[0];
}

const conversationSlice = createSlice({
  name: "conversation",
  initialState: initialConversation,
  reducers: {
    START_CONVERSATION: (state, action: PayloadAction<Conversation>) => {
      state = action.payload;
      localStorage.setItem(
        "conversation",
        JSON.stringify({
          conversation: state,
        })
      );
    },
  },
});

export const { START_CONVERSATION } = conversationSlice.actions;

export default conversationSlice.reducer;
