import { IController } from "../../../../interfaces/IController";
import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController implements IController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
