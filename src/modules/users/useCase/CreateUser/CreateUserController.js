const CreateUserUseCase = require("./CreateUserUseCase");
const AppError = require("../../../../utils/AppError");

class CreateUserController {
  async handle(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      throw new AppError("All fields must be filled.");
    }

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({ name, email, password });

    response.json(user);
  }
}

module.exports = CreateUserController;
