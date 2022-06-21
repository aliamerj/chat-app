import User from "../../modules/users.module";
import { Request, Response } from "express";
import _ from "lodash";
const register = async (req: Request, res: Response) => {
  let userInfo = _.pick(req.body, ["name", "image"]);
  let newUser = new User(userInfo);
  try {
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json("Something Incorrect");
  }
};

export default register;
