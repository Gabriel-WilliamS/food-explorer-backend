const GetCategoryByIdUseCase = require("./GetCategoryByIdUseCase");

class GetCategoryByIdController {
  async handle(request, response) {
    const { id } = request.params;

    const getCategoryByIdUseCase = new GetCategoryByIdUseCase();

    const category = await getCategoryByIdUseCase.execute({ id });
    response.json(category);
  }
}

module.exports = GetCategoryByIdController;
