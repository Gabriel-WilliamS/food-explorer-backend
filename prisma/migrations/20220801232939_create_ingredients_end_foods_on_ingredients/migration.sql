-- CreateTable
CREATE TABLE "ingredients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "foodsoOnIngredients" (
    "food_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    PRIMARY KEY ("food_id", "ingredient_id"),
    CONSTRAINT "foodsoOnIngredients_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "foodsoOnIngredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
