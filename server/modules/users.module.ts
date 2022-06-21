import mongoose from "mongoose";
interface UserType {
  name: string;
  image: string;
}

const UserSchema = new mongoose.Schema<UserType>(
  {
    name: {
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

export default mongoose.model("User", UserSchema);
