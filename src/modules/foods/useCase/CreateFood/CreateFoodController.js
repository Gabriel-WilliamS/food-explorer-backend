const AppError = require("../../../../utils/AppError");
const CreateFoodUseCase = require("./CreateFoodUseCase");

class CreateFoodController {
  async handle(request, response) {
    const { name, description, price, image, ingredients } = request.body;

    if (!name || !description || !price || !image || !ingredients) {
      throw new AppError("All fields must be filled.");
    }

    const createFoodUseCase = new CreateFoodUseCase();

    const food = await createFoodUseCase.execute({
      name,
      description,
      price,
      image,
      ingredients
    });

    response.json(food);
  }
}

module.exports = CreateFoodController;
