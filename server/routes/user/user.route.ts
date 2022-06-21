import { Router } from "express";
import { getAllUsers, getUseById } from "./user.controller";

const route = Router();

route.get("/", getAllUsers);
route.get("/:userId", getUseById);

export default route;
