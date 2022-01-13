import { IUseCase } from "../../../../interfaces/IUseCase";
import { ISpecificationRepository } from "../../../cars/repositories/ISpecificationRepository";
import { Specification } from "../../model/Specification";

export class ListSpecificationsUseCase implements IUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.all();
    return specifications;
  }
}
