import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  all(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}
