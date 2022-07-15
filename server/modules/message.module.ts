import mongoose from "mongoose";
import { Message } from "./_modules.types";

const MessageSchema = new mongoose.Schema<Message>(
  {
    conversationId: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      default: " ",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Message>("Message", MessageSchema);
