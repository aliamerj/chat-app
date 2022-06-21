import User from "../../modules/users.module";
import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}).sort({ date: -1 });
    return res.json(users);
  } catch (error: any) {
    return res.json(error.message);
  }
};

export default getAllUsers;
