import { Request, Response } from "express";
import { IController } from "../../../../interfaces/IController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController implements IController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  async handle(_: Request, response: Response): Promise<Response> {
    const specifications = await this.listSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}
