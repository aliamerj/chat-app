import Joi from "joi";
import mongoose, { SchemaDefinitionProperty } from "mongoose";
import { Conversation, Message, User } from "./_modules.types";

export const validateConversation = (conversation: Conversation) => {
  const schema = Joi.object({
    senderId: Joi.string().length(24).message("invalid id").required(),
    receiverId: Joi.string().length(24).message("invalid id").required(),
  });
  return schema.validate(conversation);
};
export const validateMessage = (message: Message) => {
  const schema = Joi.object({
    _id: Joi.string().required(),
    senderId: Joi.string().length(24).message("invalid id").required(),
    text: Joi.string().required(),
    conversationId: Joi.string().length(24).message("invalid id").required(),
    createdAt: Joi.number().required(),
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
