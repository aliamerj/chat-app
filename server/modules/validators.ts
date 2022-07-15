import Joi from "joi";
import mongoose from "mongoose";
import { Conversation, Message, User } from "./_modules.types";

export const validateConversation = (conversation: Conversation) => {
  const schema = Joi.object({
    members: Joi.array()
      .items(typeof mongoose.Schema.Types.ObjectId)
      .length(2)
      .required(),
  });
  return schema.validate(conversation);
};
export const validateMessage = (message: Message) => {
  const schema = Joi.object({
    senderId: Joi.valid(typeof mongoose.Schema.Types.ObjectId).required(),
    text: Joi.string().required(),
    conversationId: Joi.valid(typeof mongoose.Schema.Types.ObjectId).required(),
  });
  return schema.validate(message);
};

export const validateUsers = (users: User) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    image: Joi.string(),
    name: Joi.string().min(2).max(20).required(),
  });
  return schema.validate(users);
};
