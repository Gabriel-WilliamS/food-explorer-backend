const CreateAdminUseCase = require("./CreateAdminUseCase");

class CreateAdminController {
  async handle(request, response) {
    const { name, email, password } = request.body;

    const createAdminUseCase = new CreateAdminUseCase();

    const user = await createAdminUseCase.execute({
      name,
      email,
      password
    });

    response.json(user);
  }
}

module.exports = CreateAdminController;
