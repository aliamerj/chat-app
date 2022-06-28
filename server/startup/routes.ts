import express from "express";
import authRoutes from "../routes/auth/authRoutes";
import UserRoute from "../routes/user/user.route";
import MsessageRoute from "../routes/message/message.route";
import conversationRoute from "../routes/conversation/conversation.route";
import { checkAuth } from "../middleware/auth.middleware";

export default function (app: express.Application) {
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use("/user", checkAuth, UserRoute);
  app.use("/message", checkAuth, MsessageRoute);
  app.use("/conversation", checkAuth, conversationRoute);
}
