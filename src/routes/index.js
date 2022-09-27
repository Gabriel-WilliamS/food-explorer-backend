const { Router } = require("express");

const routes = Router();

const userRouter = require("./user.routes");
const foodRouter = require("./food.routes");
const adminRouter = require("./admin.routes");
const authRouter = require("./auth.routes");
const categoriesRouter = require("./categories.routes");

const UserAuthenticateController = require("../modules/accont/userAuthenticate/UserAuthenticateController");
const ensureAuthenticateAdmin = require("../middlewares/ensureAuthenticateAdmin");

routes.use("/users", userRouter);
routes.use("/admin", adminRouter);
routes.use("/foods", ensureAuthenticateAdmin, foodRouter);
routes.use("/categories", categoriesRouter);
routes.use("", authRouter);
module.exports = routes;
