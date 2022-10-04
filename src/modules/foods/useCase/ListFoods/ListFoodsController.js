const ListFoodsUseCase = require("./ListFoodsUseCase");

class ListFoodsController {
  async handle(request, response) {
    const listFoodsUseCase = new ListFoodsUseCase();

    const allFoods = await listFoodsUseCase.execute();

    response.json(allFoods);
  }
}

module.exports = ListFoodsController;
