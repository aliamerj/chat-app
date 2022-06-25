import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import config from "./startup/config";
import db from "./startup/db";
import routes from "./startup/routes";
import cookieSession from "cookie-session";
import passport from "passport";
dotenv.config();
import "./startup/passport";

config();
db();

const ClIENT_URL = "http://localhost:3000";
const app = express();
app.use(helmet());
app.use(cors({ origin: ClIENT_URL, credentials: true }));
app.use(
  cookieSession({
    name: "session_Auth",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET_KEY as string],
  })
);
app.use(passport.initialize());
app.use(passport.session());
routes(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
export default server;
