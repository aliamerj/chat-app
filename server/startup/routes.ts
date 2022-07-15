import express from "express";
import authRoutes from "../routes/auth/authRoutes";
import UserRoute from "../routes/user/user.route";
import MsessageRoute from "../routes/message/message.route";
import conversationRoute from "../routes/conversation/conversation.route";
import { checkAuth } from "../middleware/auth.middleware";
import errorMiddleware from "../middleware/error.middleware";
import createError from "http-errors";

export default function (app: express.Application) {
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use("/user", [checkAuth, UserRoute]);
  app.use("/message", [checkAuth, MsessageRoute]);
  app.use("/conversation", [checkAuth, conversationRoute]);
  app.use((req, res, next) => {
    next(createError(404));
  });
  app.use(errorMiddleware);
}
