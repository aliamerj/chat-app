import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth.store/authSlice";

export default combineReducers({ auth: authReducer });
