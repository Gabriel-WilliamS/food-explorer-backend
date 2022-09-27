const ListCategoriesUseCase = require("./ListCategoriesUseCase");

class ListCategoriesController {
  async handle(request, response) {
    const listCategoriesUseCase = new ListCategoriesUseCase();

    const categories = await listCategoriesUseCase.execute();

    response.json(categories);
  }
}

module.exports = ListCategoriesController;
