import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import config from "./startup/config";
import db from "./startup/db";
import routes from "./startup/routes";
dotenv.config();

config();
db();

const ClIENT_URL = "http://localhost:3000";
const app = express();
routes(app);

app.use(helmet());
app.use(cors({ origin: ClIENT_URL, credentials: true }));

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
export default server;
