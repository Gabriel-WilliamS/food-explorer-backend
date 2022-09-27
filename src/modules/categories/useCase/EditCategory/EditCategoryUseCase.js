const prisma = require("../../../../database/prismaClient");
const AppError = require("../../../../utils/AppError");
class EditCategoryUseCase {
  async execute({ id, name }) {
    if (!name) {
      throw new AppError("Field name is required");
    }

    if (!id && !name) {
      throw new AppError("Error changing name category");
    }

    try {
      const category = await prisma.categories.update({
        where: { id: parseInt(id) },
        data: { name }
      });

      return category;
    } catch (error) {
      return error;
    }
  }
}

module.exports = EditCategoryUseCase;
