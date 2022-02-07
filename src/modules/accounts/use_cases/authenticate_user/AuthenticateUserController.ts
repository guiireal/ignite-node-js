import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { container } from "tsyringe";
import { Request, Response } from "express";

import { IController } from "../../../../interfaces/IController";

export class AuthenticateUserController implements IController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({ email, password });

    return response.json(token);
  }
}
