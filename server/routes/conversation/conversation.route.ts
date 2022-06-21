import { Router } from "express";
import {
  addNewConversation,
  getUserConversation,
  conversationTowUsers,
} from "./conversation.controller";

const route = Router();

route.post("/", addNewConversation);
route.get("/:userId", getUserConversation);
route.get("/find/:firstUserId/:secondUserId", conversationTowUsers);

export default route;
