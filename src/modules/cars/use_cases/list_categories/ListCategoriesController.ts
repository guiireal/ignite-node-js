import { Request, Response } from "express";
import { IController } from "../../../../interfaces/IController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController implements IController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(_: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();

    return response.json(categories);
  }
}
