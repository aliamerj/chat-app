import express from "express";
import authRoutes from "../routes/auth/authRoutes";
import UserRoute from "../routes/user/user.route";
import MsessageRoute from "../routes/message/message.route";
import conversationRoute from "../routes/conversation/conversation.route";

export default function (app: express.Application) {
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use("/user", UserRoute);
  app.use("/message", MsessageRoute);
  app.use("/conversation", conversationRoute);
}
