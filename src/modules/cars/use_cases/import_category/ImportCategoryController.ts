import { Request, Response } from "express";
import { container } from "tsyringe";
import { IController } from "../../../../interfaces/IController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}
