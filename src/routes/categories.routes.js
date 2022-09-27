const { Router } = require("express");
const CreateCategoryController = require("../modules/categories/useCase/CreateCategory/CreateCategoryController");
const ListCategoriesControllerr = require("../modules/categories/useCase/ListCategory/ListCategoriesController");

const categoriesRouter = Router();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesControllerr();

categoriesRouter.post("/", createCategoryController.handle);
categoriesRouter.get("/", listCategoriesController.handle);
module.exports = categoriesRouter;
