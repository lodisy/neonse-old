/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ProductType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ProductType` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProductType.name_slug_unique";

-- CreateIndex
CREATE UNIQUE INDEX "ProductType.name_unique" ON "ProductType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductType.slug_unique" ON "ProductType"("slug");
