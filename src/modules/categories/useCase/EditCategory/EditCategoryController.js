const AppError = require("../../../../utils/AppError");
const EditCategoryUseCase = require("./EditCategoryUseCase");

class EditCategoryController {
  async handle(request, response, next) {
    const { name } = request.body;
    const { id } = request.params;

    const editCategoryUseCase = new EditCategoryUseCase();

    const category = await editCategoryUseCase.execute({ id, name });

    if (category.code === "P2002") {
      throw new AppError("A category with that name already exists");
    }

    response.json(category);
  }
}

module.exports = EditCategoryController;
