import { Router } from "express";
import { getUserMessage, postNewMessage } from "./message.controller";

const route = Router();

route.get("/:conversationId", getUserMessage);
route.post("/", postNewMessage);

export default route;
