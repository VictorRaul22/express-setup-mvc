import { type UserService } from "@/services/user.service";
import { type NextFunction, type Request, type Response } from "express";

export class UserController {
  constructor(private readonly userService: UserService) {}

  get = (_req: Request, res: Response, next: NextFunction) => {
    this.userService
      .list()
      .then((data) => res.json(data))
      .catch((err) => {
        next(err);
      });
  };
}
