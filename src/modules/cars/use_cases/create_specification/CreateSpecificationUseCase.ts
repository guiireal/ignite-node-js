import { IUseCase } from "../../../../interfaces/IUseCase";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase implements IUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    await this.specificationRepository.create({ name, description });
  }
}
