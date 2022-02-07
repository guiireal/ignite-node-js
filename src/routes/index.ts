import { Router } from "express";

import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./user.routes";
import { authenticateRoutes } from "./authenticate.routes";

const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/specifications", specificationRoutes);
routes.use("/users", userRoutes);
routes.use(authenticateRoutes);

export { routes };
