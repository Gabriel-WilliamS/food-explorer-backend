const AppError = require("../../../../utils/AppError");
const prisma = require("../../../../database/prismaClient");

class CreateCategoryUseCase {
  async execute({ name }) {
    if (!name) {
      throw new AppError("Field name is required");
    }

    const categoryAlreadyExists = await prisma.categories.findFirst({
      where: {
        name
      }
    });

    console.log(categoryAlreadyExists);
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists.");
    }

    const createCategory = await prisma.categories.create({
      data: {
        name
      }
    });

    return createCategory;
  }
}

module.exports = CreateCategoryUseCase;
