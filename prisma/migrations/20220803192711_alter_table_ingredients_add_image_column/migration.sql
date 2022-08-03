/*
  Warnings:

  - You are about to drop the column `user_id` on the `ingredients` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ingredients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_ingredients" ("id", "name") SELECT "id", "name" FROM "ingredients";
DROP TABLE "ingredients";
ALTER TABLE "new_ingredients" RENAME TO "ingredients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
