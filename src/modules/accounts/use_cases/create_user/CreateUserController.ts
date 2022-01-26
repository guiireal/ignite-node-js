import { Request, Response } from "express";
import { container } from "tsyringe";
import { IController } from "./../../../../interfaces/IController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      password,
      driverLicense: driver_license,
    });

    return response.status(201).send();
  }
}
