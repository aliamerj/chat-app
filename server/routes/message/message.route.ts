import { Router } from "express";
import validatorMiddleware from "../../middleware/validate.middleware";
import { validateMessage } from "../../modules/validators";
import { Message } from "../../modules/_modules.types";
import { getUserMessage, postNewMessage } from "./message.controller";

const route = Router();

route.get("/:conversationId", getUserMessage);
route.post("/", [
  validatorMiddleware<Message>(validateMessage),
  postNewMessage,
]);

export default route;
