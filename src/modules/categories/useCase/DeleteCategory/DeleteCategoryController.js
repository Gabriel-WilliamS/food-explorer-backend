const DeleteCategoryUseCase = require("./DeleteCategoryUseCase");
const AppError = require("../../../../utils/AppError");

class DeleteCategoryController {
  async handle(request, response) {
    const { id } = request.body;

    const deleteCategoryUseCase = new DeleteCategoryUseCase();

    const category = await deleteCategoryUseCase.execute({ id });

    if (category.code === "P2003") {
      throw new AppError(
        "Não é possivel excluir essa categoria pois existem produtos cadastrados."
      );
    }

    response.json(category);
  }
}

module.exports = DeleteCategoryController;
