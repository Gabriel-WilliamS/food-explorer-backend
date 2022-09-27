/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Categories";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_foodsOnCategories" (
    "food_id" INTEGER NOT NULL,
    "categories_id" INTEGER NOT NULL,

    PRIMARY KEY ("food_id", "categories_id"),
    CONSTRAINT "foodsOnCategories_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "foodsOnCategories_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_foodsOnCategories" ("categories_id", "food_id") SELECT "categories_id", "food_id" FROM "foodsOnCategories";
DROP TABLE "foodsOnCategories";
ALTER TABLE "new_foodsOnCategories" RENAME TO "foodsOnCategories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
