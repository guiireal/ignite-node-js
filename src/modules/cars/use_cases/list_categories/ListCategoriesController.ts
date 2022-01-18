import { Request, Response } from "express";
import { container } from "tsyringe";
import { IController } from "../../../../interfaces/IController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController implements IController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const categories = await listCategoriesUseCase.execute();

    return response.json(categories);
  }
}
