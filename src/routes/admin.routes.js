const { Router } = require("express");

const AdminAuthenticateController = require("../modules/accont/adminAuthenticate/AdminAuthenticateController");

const adminRouter = Router();

const adminAuthenticateController = new AdminAuthenticateController();

adminRouter.post("/authenticated", adminAuthenticateController.handle);

module.exports = adminRouter;
