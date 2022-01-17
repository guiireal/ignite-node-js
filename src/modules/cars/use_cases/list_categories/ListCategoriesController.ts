import { Request, Response } from "express";
import { IController } from "../../../../interfaces/IController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController implements IController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(_: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoriesUseCase.execute();

    return response.json(categories);
  }
}
