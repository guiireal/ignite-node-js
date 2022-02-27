import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";

export class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  async all(): Promise<Category[]> {
    const all = this.categories;
    return all;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }
}
