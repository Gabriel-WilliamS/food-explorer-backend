const CreateFoodUseCase = require("./CreateFoodUseCase");

class CreateFoodController {
  async handle(request, response) {
    const { name, description, price, ingredients, category } = request.body;
    const image = request.file;
    let { user } = request;
    const newIngredients = await ingredients.split(",");

    const createFoodUseCase = new CreateFoodUseCase();

    const ingredientsLowerCase = newIngredients.map((i) => i.toLowerCase());

    const food = await createFoodUseCase.execute({
      name,
      description,
      price: parseFloat(price),
      image,
      category: Number(category),
      ingredients: ingredientsLowerCase,
      user_id: Number(user.user_id)
    });

    response.json(food);
  }
}

module.exports = CreateFoodController;
