import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Conversation {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}
interface InitialConversation {
  conversation: Conversation | null;
}

let initialState: InitialConversation = {
  conversation: null,
};
if (localStorage.getItem("conversation")) {
  initialState.conversation = JSON.parse(
    localStorage.getItem("conversation") || "{}"
  ).conversation;
}

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    START_CONVERSATION: (state, action: PayloadAction<Conversation>) => {
      state.conversation = action.payload;
      localStorage.setItem(
        "conversation",
        JSON.stringify({
          conversation: state.conversation,
        })
      );
    },
  },
});

export const { START_CONVERSATION } = conversationSlice.actions;

export default conversationSlice.reducer;
