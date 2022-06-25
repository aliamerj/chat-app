import express from "express";
import passport from "passport";
import { checkAuth } from "../../middleware/auth.middleware";
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
    session: true,
  }),
  (req, res) => {
    console.log("Google call us back !");
  }
);
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});
router.get("/logout", (req: any, res) => {
  req.logout();
  return res.status(200).redirect("http://localhost:3000");
});

router.get("/login/failed", (req, res) => {
  return res.status(400).json({
    success: false,
    message: "failed",
  });
});

router.get("/test", checkAuth, (req, res) => {
  return res.status(200).json("secret is you ");
});

export default router;
