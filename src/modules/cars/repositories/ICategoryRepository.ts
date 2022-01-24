import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";

export interface ICategoryRepository {
  findByName(name: string): Promise<Category | undefined>;
  all(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}
