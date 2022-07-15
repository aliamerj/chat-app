import Message from "../../modules/message.module";
import { Request, Response } from "express";
import _ from "lodash";

export const postNewMessage = async (req: Request, res: Response) => {
  let messageInfo = _.pick(req.body, ["conversationId", "senderId", "text"]);
  const message = new Message(messageInfo);
  message.save();
  return res.status(200).json(message);
};
export const getUserMessage = async (req: Request, res: Response) => {
  const messages = await Message.find({
    conversationId: req.params.conversationId,
  });
  res.status(200).json(messages);
};
