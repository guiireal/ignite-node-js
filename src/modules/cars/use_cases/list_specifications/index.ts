import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const categoryRepository = CategoryRepository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
  categoryRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
