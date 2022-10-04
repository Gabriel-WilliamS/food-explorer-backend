const prisma = require("../../../../database/prismaClient");

class ListFoodsUseCase {
  async execute() {
    const allFoods = await prisma.foods.findMany({
      include: {
        categories: {
          select: {
            categories: true
          }
        },
        ingredients: {
          select: {
            ingredient: true
          }
        }
      }
    });

    return allFoods;
  }
}

module.exports = ListFoodsUseCase;
