import { IUseCase } from "../../../../interfaces/IUseCase";
import { ISpecificationRepository } from "../../../cars/repositories/ISpecificationRepository";
import { Specification } from "../../entities/Specification";

export class ListSpecificationsUseCase implements IUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.all();
    return specifications;
  }
}
