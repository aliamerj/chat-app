import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { User } from "../../Types/Types";

interface InitialAuth {
  currentUser: User | null;
  isFetching: boolean;
  errorMessage: null | string;
}
let initialState: InitialAuth = {
  currentUser: null,
  isFetching: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    START_LOGIN: (state) => {
      state.isFetching = true;
    },
    SUCCESS_LOGIN: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    FAILURE_LOGIN: (state, action: PayloadAction<null | string>) => {
      state.errorMessage = action.payload;
    },
    SIGN_OUT: (state) => {
      state.currentUser = null;
      storage.removeItem("root");
    },
    FINASH_LOGIN: (state) => {
      state.isFetching = false;
    },
  },
});

export const {
  SUCCESS_LOGIN,
  START_LOGIN,
  FAILURE_LOGIN,
  SIGN_OUT,
  FINASH_LOGIN,
} = authSlice.actions;

export default authSlice.reducer;
