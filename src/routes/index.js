const { Router } = require("express");

const routes = Router();

const ensureAuthenticateUser = require("../middlewares/ensureAuthenticateUser");

const userRouter = require("./user.routes");
const foodRouter = require("./food.routes");

routes.use("/users", userRouter);
routes.use("/foods", foodRouter);

module.exports = routes;
