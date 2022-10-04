const { Router } = require("express");
const CreateFoodController = require("../modules/foods/useCase/CreateFood/CreateFoodController");
const uploadConfig = require("../config/upload");
const multer = require("multer");
const ListFoodsController = require("../modules/foods/useCase/ListFoods/ListFoodsController");

const upload = multer(uploadConfig.MULTER);
const foodRouter = Router();

const createFoodController = new CreateFoodController();
const listFoodsController = new ListFoodsController();

foodRouter.post("/", upload.single("image"), createFoodController.handle);
foodRouter.get("/", listFoodsController.handle);

module.exports = foodRouter;
