import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  findByName(name: string): Specification | undefined;
  all(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
}
