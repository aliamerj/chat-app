import Conversation from "../../modules/conversation.module";
import { Request, Response } from "express";
import usersModule from "../../modules/users.module";

export const addNewConversationOrGetOld = async (
  req: Request,
  res: Response
) => {
  const conversation = await Conversation.findOne({
    members: { $all: [req.body.senderId, req.body.receiverId] },
  });
  if (conversation) {
    return res.status(200).json(conversation);
  } else {
    const getSenderUser = await usersModule.findById(req.body.senderId);
    const getResiverUser = await usersModule.findById(req.body.receiverId);
    if (getSenderUser && getResiverUser) {
      const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
      });
      const savedConversation = await newConversation.save();
      return res.status(201).json(savedConversation);
    }
    res.status(400).json("one of the users dose not exist");
  }
};

// so helpfull
export const getUserConversation = async (req: Request, res: Response) => {
  const conversation = await Conversation.find({
    members: { $in: [req.params.userId] },
  });
  return res.status(200).json(conversation);
};
