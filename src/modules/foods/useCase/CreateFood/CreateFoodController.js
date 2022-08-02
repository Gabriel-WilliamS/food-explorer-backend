const AppError = require("../../../../utils/AppError");
const CreateFoodUseCase = require("./CreateFoodUseCase");

class CreateFoodController {
  async handle(request, response) {
    const { name, description, price, image, ingredients } = request.body;
    let { user_id } = request;
    if (!name || !description || !price || !image || !ingredients) {
      throw new AppError("All fields must be filled.");
    }

    const createFoodUseCase = new CreateFoodUseCase();

    const ingredientsLowerCase = ingredients.map((i) => i.toLowerCase());

    const food = await createFoodUseCase.execute({
      name,
      description,
      price,
      image,
      ingredients: ingredientsLowerCase,
      user_id: Number(user_id)
    });

    response.json(food);
  }
}

module.exports = CreateFoodController;
