const prisma = require("../../../../database/prismaClient");

class CreateFoodUseCase {
  async execute({ name, description, price, image, ingredients, user_id }) {
    const fetchIngredients = await prisma.ingredients.findMany({
      where: {
        name: { in: ingredients }
      }
    });

    const ingredientsAlreadyRegisteredObject = fetchIngredients.map((i) => {
      return {
        ingredient: {
          connect: {
            id: i.id
          }
        }
      };
    });

    const namesIngredientsAlreadyRegistered = fetchIngredients.map(
      (i) => i.name
    );

    const newIngredients = ingredients.filter(
      (nameNewIngredients) =>
        !namesIngredientsAlreadyRegistered.includes(nameNewIngredients)
    );

    const newIngredientsObject = newIngredients.map((i) => {
      return {
        ingredient: {
          create: {
            name: i
          }
        }
      };
    });

    const createIngredients = [
      ...ingredientsAlreadyRegisteredObject,
      ...newIngredientsObject
    ];

    const createFood = await prisma.foods.create({
      data: {
        name,
        description,
        price,
        image,
        user_id,
        ingredients: {
          create: createIngredients
        }
      }
    });

    return createFood;
  }
}

module.exports = CreateFoodUseCase;
