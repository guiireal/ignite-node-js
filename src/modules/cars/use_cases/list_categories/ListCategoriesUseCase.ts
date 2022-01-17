import { IUseCase } from "../../../../interfaces/IUseCase";
import { ICategoryRepository } from "../../../cars/repositories/ICategoryRepository";
import { Category } from "../../entities/Category";

export class ListCategoriesUseCase implements IUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.all();
    return categories;
  }
}
