import express from "express";
import patch from "path";

export default function (app: express.Application) {
  app.use(express.json());

  // app.use(express.static(patch.join(__dirname, "..", "public")));

  // app.get("/*", (req, res) => {
  //   res.sendFile(patch.join(__dirname, "..", "public", "index.html"));
  // });
}
