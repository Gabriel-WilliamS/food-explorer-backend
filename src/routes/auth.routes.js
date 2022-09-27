const { Router } = require("express");
const UserAuthenticateController = require("../modules/accont/userAuthenticate/UserAuthenticateController");
const CreateAdminController = require("../modules/users/useCase/CreateAdmin/CreateAdminController");
const CreateUserController = require("../modules/users/useCase/CreateUser/CreateUserController");

const authRouter = Router();

const userAuthenticateController = new UserAuthenticateController();
const createUserController = new CreateUserController();
const createAdminController = new CreateAdminController();

authRouter.use("/login", userAuthenticateController.handle);
authRouter.use("/user-register", createUserController.handle);
authRouter.use("/admin-register", createAdminController.handle);

module.exports = authRouter;
