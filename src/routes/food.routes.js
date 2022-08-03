const { Router } = require("express");
const CreateFoodController = require("../modules/foods/useCase/CreateFood/CreateFoodController");
const ensureAuthenticateAdmin = require("../middlewares/ensureAuthenticateAdmin");
const foodRouter = Router();

const createFoodController = new CreateFoodController();

foodRouter.post("/", ensureAuthenticateAdmin, createFoodController.handle);

module.exports = foodRouter;
