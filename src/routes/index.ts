import { Router } from "express";

import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";

const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/specifications", specificationRoutes);

export { routes };
