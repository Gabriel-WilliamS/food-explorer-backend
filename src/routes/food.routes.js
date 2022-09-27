const { Router } = require("express");
const CreateFoodController = require("../modules/foods/useCase/CreateFood/CreateFoodController");
const uploadConfig = require("../config/upload");
const multer = require("multer");

const upload = multer(uploadConfig.MULTER);
const foodRouter = Router();

const createFoodController = new CreateFoodController();

foodRouter.post("/", upload.single("image"), createFoodController.handle);

module.exports = foodRouter;
