const { Router } = require("express");
const CreateCategoryController = require("../modules/categories/useCase/CreateCategory/CreateCategoryController");

const categoriesRouter = Router();
const createCategoryController = new CreateCategoryController();

categoriesRouter.post("/", createCategoryController.handle);

module.exports = categoriesRouter;
