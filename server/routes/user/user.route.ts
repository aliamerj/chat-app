import { Router } from "express";
import getAllUsers from "./user.controller";

const route = Router();

// get all users

route.get("/", getAllUsers);

export default route;
