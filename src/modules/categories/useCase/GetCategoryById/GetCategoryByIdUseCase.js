const AppError = require("../../../../utils/AppError");
const prisma = require("../../../../database/prismaClient");

class GetCategoryByIdUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("Id is required");
    }

    const category = await prisma.categories.findFirst({
      where: {
        id: parseInt(id)
      }
    });

    return category;
  }
}

module.exports = GetCategoryByIdUseCase;
