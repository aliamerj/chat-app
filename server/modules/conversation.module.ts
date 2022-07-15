import mongoose from "mongoose";
import { Conversation } from "./_modules.types";

const ConversationSchema = new mongoose.Schema<Conversation>(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Conversation>("Conversation", ConversationSchema);
