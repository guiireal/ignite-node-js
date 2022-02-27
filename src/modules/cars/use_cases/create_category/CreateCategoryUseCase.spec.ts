import { AppError } from "./../../../../errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/in_memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );
  });

  it("should be able to create a new cateogory category", async () => {
    const category = {
      name: "Category 1",
      description: "Category 1 description",
    };

    await createCategoryUseCase.execute({ ...category });
    const categoryCreated = await categoryRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category 1",
        description: "Category 1 description",
      };

      await createCategoryUseCase.execute({ ...category });
      await createCategoryUseCase.execute({ ...category });
    }).rejects.toBeInstanceOf(AppError);
  });
});
