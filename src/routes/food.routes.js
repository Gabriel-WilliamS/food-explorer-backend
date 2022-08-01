const { Router } = require("express");
const CreateFoodController = require("../modules/foods/useCase/CreateFood/CreateFoodController");

const foodRouter = Router();

const createFoodController = new CreateFoodController();

foodRouter.post("/", createFoodController.handle);

module.exports = foodRouter;
