import { Specification } from "../../model/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  all(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    const specifications = this.specifications.find(
      (category) => category.name === name
    );
    return specifications;
  }
}
