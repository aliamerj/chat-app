import mongoose from "mongoose";
interface UserType {
  googleId: string;
  name: string;
  image?: string;
  email: string;
}

const UserSchema = new mongoose.Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserType>("User", UserSchema);
