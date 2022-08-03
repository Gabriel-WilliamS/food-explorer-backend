const AdminAuthenticateUseCase = require("./AdminAuthenticateUseCase");

class AdminAuthenticateController {
  async handle(request, response) {
    const { email, password } = request.body;

    const adminAuthenticateUseCase = new AdminAuthenticateUseCase();

    const userAuth = await adminAuthenticateUseCase.execute({
      email,
      password
    });

    response.json(userAuth);
  }
}

module.exports = AdminAuthenticateController;
