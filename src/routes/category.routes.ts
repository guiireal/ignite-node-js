import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/use_cases/create_category/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/use_cases/import_category/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/use_cases/list_categories/ListCategoriesController";

const categoryRoutes = Router();

const upload = multer({ dest: "./temp" });

const createCategorController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoryRoutes.post("/", createCategorController.handle);

categoryRoutes.get("/", listCategoriesController.handle);

categoryRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoryRoutes };
