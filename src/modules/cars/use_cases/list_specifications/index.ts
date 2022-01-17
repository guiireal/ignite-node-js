import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export default () => {
  const categoryRepository = new SpecificationRepository();

  const listSpecificationsUseCase = new ListSpecificationsUseCase(
    categoryRepository
  );

  const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
  );

  return listSpecificationsController;
};
