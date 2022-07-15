import mongoose from "mongoose";
import { User } from "./_modules.types";
const { isEmail } = require("validator/validator");

const UserSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
      minlength: 5,
      validate: [isEmail, "invalid email"],
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model<User>("User", UserSchema);
