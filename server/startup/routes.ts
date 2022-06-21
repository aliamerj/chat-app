import express from "express";
import patch from "path";

import RegisterRoute from "../routes/register/register.route";
import UserRoute from "../routes/user/user.route";
import MsessageRoute from "../routes/message/message.route";
import conversationRoute from "../routes/conversation/conversation.route";

export default function (app: express.Application) {
  app.use(express.json());

  // app.use(express.static(patch.join(__dirname, "..", "public")));

  // app.get("/*", (req, res) => {
  //   res.sendFile(patch.join(__dirname, "..", "public", "index.html"));
  // });

  app.use("/", RegisterRoute);
  app.use("/user", UserRoute);
  app.use("/message", MsessageRoute);
  app.use("/conversation", conversationRoute);
}
