import { Router } from "express";
import { CreateUserController } from "../modules/accounts/use_cases/create_user/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
