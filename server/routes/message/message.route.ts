import { Router } from "express";
import { getAllMessage, getUserMessage } from "./message.controller";

const route = Router();

route.get("/", getAllMessage);
route.post("/:conversationId", getUserMessage);

export default route;
