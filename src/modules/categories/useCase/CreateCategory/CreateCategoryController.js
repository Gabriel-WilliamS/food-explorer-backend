const CreateCategoryUseCase = require("./CreateCategoryUseCase");

class CreateCategoryController {
  async handle(request, response) {
    const { name } = request.body;

    const createCategoryUseCase = new CreateCategoryUseCase();

    const category = await createCategoryUseCase.execute({ name });
    response.json({ category });
  }
}

module.exports = CreateCategoryController;
