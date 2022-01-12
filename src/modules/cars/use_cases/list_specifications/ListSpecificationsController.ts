import { Request, Response } from "express";
import { IController } from "../../../../interfaces/IController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController implements IController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(_: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}
