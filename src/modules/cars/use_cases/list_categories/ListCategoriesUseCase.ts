import { ICategoryRepository } from "../../../cars/repositories/ICategoryRepository";
import { Category } from "../../model/Category";

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.all();
    return categories;
  }
}
