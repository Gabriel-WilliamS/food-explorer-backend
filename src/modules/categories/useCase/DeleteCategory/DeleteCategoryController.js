const DeleteCategoryUseCase = require("./DeleteCategoryUseCase");

class DeleteCategoryController {
  async handle(request, response) {
    const { id } = request.body;

    const deleteCategoryUseCase = new DeleteCategoryUseCase();

    const category = await deleteCategoryUseCase.execute({ id });

    response.json(category);
  }
}

module.exports = DeleteCategoryController;
