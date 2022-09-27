const CreateCategoryUseCase = require("./CreateCategoryUseCase");

class CreateCategoryController {
  async handle(request, response) {
    const { name } = request.body;

    const createCategoryUseCase = new CreateCategoryUseCase();

    const newCategory = name.toLowerCase().trim();
    const category = await createCategoryUseCase.execute({ name: newCategory });
    response.json({ category });
  }
}

module.exports = CreateCategoryController;
