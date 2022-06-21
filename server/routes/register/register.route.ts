import { Router } from "express";
import register from "./regiser.controller";

const route = Router();

route.post("/register", register);

export default route;
