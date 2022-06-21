import { Router } from "express";
import { getUserMessage, postNewMessage } from "./message.controller";

const route = Router();

route.get("/", postNewMessage);
route.post("/:conversationId", getUserMessage);

export default route;
