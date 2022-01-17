import { Router } from "express";
import createSpecificationController from "../modules/cars/use_cases/create_specification";
import listSpecificationsController from "../modules/cars/use_cases/list_specifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController().handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationsController().handle(request, response);
});

export { specificationRoutes };
