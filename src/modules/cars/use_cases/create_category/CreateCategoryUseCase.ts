import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";

import { IUseCase } from "../../../../interfaces/IUseCase";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase implements IUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    await this.categoryRepository.create({ name, description });
  }
}
