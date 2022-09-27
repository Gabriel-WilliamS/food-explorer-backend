const { Router } = require("express");
const CreateCategoryController = require("../modules/categories/useCase/CreateCategory/CreateCategoryController");
const EditCategoryController = require("../modules/categories/useCase/EditCategory/EditCategoryController");
const ListCategoriesController = require("../modules/categories/useCase/ListCategory/ListCategoriesController");

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const editCategoryController = new EditCategoryController();

categoriesRouter.post("/", createCategoryController.handle);
categoriesRouter.get("/", listCategoriesController.handle);
categoriesRouter.put("/:id", editCategoryController.handle);

module.exports = categoriesRouter;
