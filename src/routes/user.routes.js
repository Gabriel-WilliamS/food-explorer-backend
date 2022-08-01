const { Router } = require("express");

const UserAuthenticateController = require("../modules/accont/userAuthenticate/UserAuthenticateController");
const CreateUserController = require("../modules/users/useCase/CreateUser/CreateUserController");

const userRouter = Router();

const createUserController = new CreateUserController();
const userAuthenticateController = new UserAuthenticateController();

userRouter.post("/", createUserController.handle);
userRouter.post("/authenticated", userAuthenticateController.handle);

module.exports = userRouter;
