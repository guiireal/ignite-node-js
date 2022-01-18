import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/use_cases/create_specification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/use_cases/list_specifications/ListSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
