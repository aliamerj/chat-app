import { NextFunction, Request, Response } from "express";
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const isAuth = req.isAuthenticated() && req.user;
  if (isAuth) {
    next();
  } else {
    res.status(401).json("unAuthenticated");
  }
};
