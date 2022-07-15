import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { User, Conversation, Message } from "../modules/_modules.types";

interface Validators<ModuleType> {
  (module: ModuleType): Joi.ValidationResult<any>;
}

function validatorMiddleware<ModuleType>(module: Validators<ModuleType>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = module(req.body);
    if (error) return res.status(400).json(error.message);
    else {
      next();
    }
  };
}

export default validatorMiddleware;
