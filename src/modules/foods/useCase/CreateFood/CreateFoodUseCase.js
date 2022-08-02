const prisma = require("../../../../database/prismaClient");

class CreateFoodUseCase {
  async execute({ name, description, price, image, ingredients, user_id }) {
    let createIngredient = [];

    const createFood = await prisma.foods.create({
      data: {
        name,
        description,
        price,
        image,
        user_id
      }
    });

    const fetchIngredients = await prisma.ingredients.findMany({
      where: {
        name: { in: ingredients }
      }
    });

    const existingIngredients = fetchIngredients.map((i) => i.name);

    const newIngredients = ingredients.filter(
      (i) => !existingIngredients.includes(i)
    );

    for (const i of newIngredients) {
      const newIngredients = await prisma.ingredients.create({
        data: {
          name: i
        }
      });

      createIngredient.push(newIngredients);

      await prisma.FoodsOnIngredients.create({
        data: {
          food_id: createFood.id,
          ingredient_id: newIngredients.id
        }
      });
    }

    for (const i of fetchIngredients) {
      await prisma.FoodsOnIngredients.create({
        data: {
          food_id: createFood.id,
          ingredient_id: i.id
        }
      });
    }

    return createFood;
  }
}

module.exports = CreateFoodUseCase;
