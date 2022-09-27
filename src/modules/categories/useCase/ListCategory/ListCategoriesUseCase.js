const prisma = require("../../../../database/prismaClient");

class ListCategoriesUseCase {
  async execute() {
    const categories = await prisma.categories.findMany();

    return categories;
  }
}

module.exports = ListCategoriesUseCase;
