const AppError = require("../../../../utils/AppError");
const prisma = require("../../../../database/prismaClient");

class DeleteCategoryUseCase {
  async execute({ id }) {
    if (!id) {
      throw new AppError("Id is required");
    }

    const categoryMatch = await prisma.categories.findFirst({
      where: {
        id: parseInt(id)
      }
    });

    if (!categoryMatch) {
      throw new AppError("Error deleting category.");
    }

    try {
      const category = await prisma.categories.delete({
        where: {
          id: parseInt(id)
        }
      });

      return category;
    } catch (error) {
      return error;
    }
  }
}

module.exports = DeleteCategoryUseCase;
