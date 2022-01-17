import { Request, Response } from "express";
import { IController } from "../../../../interfaces/IController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController implements IController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.importCategoryUseCase.execute(file);

    return response.send();
  }
}
