const prisma = require("../../../../database/prismaClient");

class CreateFoodUseCase {
  async execute({ name, description, price, image, ingredients }) {
    const createFood = await prisma.foods.create({
      data: {
        name,
        description,
        price,
        image,
        ingredients: {
          create: [
            {
              ingredient: {
                create: {
                  name: "Arroz"
                }
              }
            }
          ]
        }
      }
    });

    return createFood;
  }
}

module.exports = CreateFoodUseCase;
