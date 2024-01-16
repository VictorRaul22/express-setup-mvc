import { UserController } from "@/controller/user.controller";
import { UserService } from "@/services/user.service";
import express, { type Router } from "express";
const router: Router = express.Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get("/", userController.get);

export { router as userRouter };
