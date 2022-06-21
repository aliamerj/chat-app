import mongoose, { SchemaDefinitionProperty } from "mongoose";

interface conversationType {
  members: SchemaDefinitionProperty<mongoose.Types.ObjectId[]>;
}
const ConversationSchema = new mongoose.Schema<conversationType>(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model<conversationType>(
  "Conversation",
  ConversationSchema
);
