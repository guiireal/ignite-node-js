import { Category } from "../entities/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  findByName(name: string): Promise<Category | undefined>;
  all(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}
