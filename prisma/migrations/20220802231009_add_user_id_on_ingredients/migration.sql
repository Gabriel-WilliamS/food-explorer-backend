/*
  Warnings:

  - You are about to drop the `foodsoOnIngredients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "foodsoOnIngredients";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "foodsOnIngredients" (
    "food_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    PRIMARY KEY ("food_id", "ingredient_id"),
    CONSTRAINT "foodsOnIngredients_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "foodsOnIngredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ingredients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "ingredients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ingredients" ("id", "name") SELECT "id", "name" FROM "ingredients";
DROP TABLE "ingredients";
ALTER TABLE "new_ingredients" RENAME TO "ingredients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
