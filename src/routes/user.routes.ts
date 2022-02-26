import multer from "multer";
import uploadConfiguration from "../config/upload";

import { Router } from "express";
import { CreateUserController } from "../modules/accounts/use_cases/create_user/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/use_cases/update_user_avatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfiguration.upload("./temp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUserController.handle);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { userRoutes };
