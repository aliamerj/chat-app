import { Router } from "express";
import validatorMiddleware from "../../middleware/validate.middleware";
import { validateConversation } from "../../modules/validators";
import { Conversation } from "../../modules/_modules.types";
import { addNewConversationOrGetOld } from "./conversation.controller";

const route = Router();

route.post("/", [
  validatorMiddleware<Conversation>(validateConversation),
  addNewConversationOrGetOld,
]);
export default route;
