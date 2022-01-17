import { IUseCase } from "../../../../interfaces/IUseCase";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase implements IUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    await this.categoryRepository.create({ name, description });
  }
}
