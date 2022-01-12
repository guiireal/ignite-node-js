import { Router } from "express";
import { createCategoryController } from "../modules/cars/use_cases/create_category";
import { listCategoriesController } from "../modules/cars/use_cases/list_categories";

const categoryRoutes = Router();

categoryRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoryRoutes.get("/", (request, response) =>
  listCategoriesController.handle(request, response)
);

export { categoryRoutes };
