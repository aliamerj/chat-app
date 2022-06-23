import mongoose, { SchemaDefinitionProperty } from "mongoose";
interface MessageType {
  conversationId: SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  senderId: SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  text: string;
}

const MessageSchema = new mongoose.Schema<MessageType>(
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
    },
  },
  { timestamps: true }
);

export default mongoose.model<MessageType>("Message", MessageSchema);
