-- CreateTable
CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "foodsOnCategories" (
    "food_id" INTEGER NOT NULL,
    "categories_id" INTEGER NOT NULL,

    PRIMARY KEY ("food_id", "categories_id"),
    CONSTRAINT "foodsOnCategories_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "foodsOnCategories_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
