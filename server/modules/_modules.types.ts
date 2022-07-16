import mongoose, { SchemaDefinitionProperty } from "mongoose";

export interface Conversation {
  _id?: SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  createdAt?: string;
  members: SchemaDefinitionProperty<mongoose.Types.ObjectId>[];
  updatedAt?: string;
}
export interface Message {
  _id: string;
  senderId: SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  text: string;
  conversationId: SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  createdAt: number | string;
}
export interface User {
  _id?: SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  createdAt?: string;
  email: string;
  image: string | undefined;
  name: string;
  updatedAt?: string;
}
