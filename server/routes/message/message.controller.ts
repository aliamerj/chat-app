import Message from "../../modules/message.module";
import { Request, Response } from "express";
import _ from "lodash";

export const postNewMessage = async (req: Request, res: Response) => {
  try {
    let messageInfo = _.pick(req.body, ["conversationId", "sender", "text"]);
    const message = new Message(messageInfo);
    message.save();
    return res.status(200).json(message);
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
};
export const getUserMessage = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
