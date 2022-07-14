import { TDate } from "timeago.js";

export interface User {
  _id: string;
  createdAt: string;
  email: string;
  image: string;
  name: string;
  updatedAt: string;
}
export interface Message {
  _id: string;
  senderId: string;
  text: string;
  conversationId?: string;
  createdAt?: number;
}
export interface LoginData {
  success: boolean;
  message: string;
  user: User | null;
}

export interface Conversation {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}
export interface UserSoket {
  userId: string;
  socketId: string;
}
