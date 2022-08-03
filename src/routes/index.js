const { Router } = require("express");

const routes = Router();

// const ensureAuthenticateUser = require("../middlewares/ensureAuthenticateUser");

const userRouter = require("./user.routes");
const foodRouter = require("./food.routes");
const adminRouter = require("./admin.routes");

routes.use("/users", userRouter);
routes.use("/admin", adminRouter);
routes.use("/foods", foodRouter);

module.exports = routes;
