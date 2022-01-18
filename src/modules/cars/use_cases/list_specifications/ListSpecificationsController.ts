import { Request, Response } from "express";
import { container } from "tsyringe";
import { IController } from "../../../../interfaces/IController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController implements IController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const specifications = await listSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}
