import { Router } from "express";
import { getAllUsers } from "./user.controller";

const route = Router();

route.get("/", getAllUsers);

export default route;
