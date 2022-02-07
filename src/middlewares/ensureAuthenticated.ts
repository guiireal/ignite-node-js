import { AppError } from "../errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      process.env.JSON_WEB_TOKEN_SECRET
    ) as { sub: string };

    const userRepository = new UserRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
