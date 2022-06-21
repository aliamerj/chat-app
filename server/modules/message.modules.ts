import mongoose from "mongoose";
interface MessageType {
  from: {
    type: mongoose.Types.ObjectId;
    ref: "User";
  };
  to: {
    type: mongoose.Types.ObjectId;
    ref: "User";
  };
  message: string;
}

const MessageSchema = new mongoose.Schema<MessageType>(
  {
    from: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    to: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", MessageSchema);
