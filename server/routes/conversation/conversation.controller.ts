import Conversation from "../../modules/conversation.module";
import { Request, Response } from "express";

export const addNewConversation = async (req: Request, res: Response) => {
  try {
    const conversation = await Conversation.find({
      members: { $all: [req.body.senderId, req.body.receiverId] },
    });
    if (conversation.length !== 0) {
      return res.status(200).json(conversation);
    } else {
      const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
      });
      const savedConversation = await newConversation.save();
      return res.status(201).json(savedConversation);
    }
  } catch (err: any) {
    return res.status(500).json(err);
  }
};

export const getUserConversation = async (req: Request, res: Response) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const conversationTowUsers = async (req: Request, res: Response) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};
