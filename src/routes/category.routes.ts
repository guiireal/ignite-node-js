import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/use_cases/create_category";
import { importCategoryController } from "../modules/cars/use_cases/import_category";
import { listCategoriesController } from "../modules/cars/use_cases/list_categories";

const categoryRoutes = Router();

const upload = multer({ dest: "./temp" });

categoryRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoryRoutes.get("/", (request, response) =>
  listCategoriesController.handle(request, response)
);

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoryRoutes };
