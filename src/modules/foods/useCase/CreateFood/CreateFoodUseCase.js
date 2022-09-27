const prisma = require("../../../../database/prismaClient");
const DiskStorage = require("../../../../providers/DiskStorage");
const AppError = require("../../../../utils/AppError");

class CreateFoodUseCase {
  async execute({ name, description, price, image, ingredients, user_id }) {
    if (!description) {
      throw new AppError("Description field is empty.");
    }

    if (!price) {
      throw new AppError("Price field is empty.");
    }

    if (!image) {
      throw new AppError("Image field is empty.");
    }

    if (!ingredients) {
      throw new AppError("Ingredients field is empty.");
    }

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(image.filename);

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
        image: filename,
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
