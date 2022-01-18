import { inject, injectable } from "tsyringe";
import { IUseCase } from "../../../../interfaces/IUseCase";
import { ICategoryRepository } from "../../../cars/repositories/ICategoryRepository";
import { Category } from "../../entities/Category";

@injectable()
export class ListCategoriesUseCase implements IUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.all();
    return categories;
  }
}
