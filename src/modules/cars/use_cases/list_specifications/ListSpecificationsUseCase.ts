import { ISpecificationRepository } from "../../../cars/repositories/ISpecificationRepository";
import { Specification } from "../../model/Specification";

export class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.all();
    return specifications;
  }
}
