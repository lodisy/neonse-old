/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ProductCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sku]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[brandId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jwtToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[resetPasswordToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifierToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProductCategory.name_slug_unique";

-- DropIndex
DROP INDEX "User.email_username_jwtToken_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Card.number_unique" ON "Card"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Product.sku_unique" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory.slug_unique" ON "ProductCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant.sku_unique" ON "ProductVariant"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.brandId_unique" ON "Profile"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User.jwtToken_unique" ON "User"("jwtToken");

-- CreateIndex
CREATE UNIQUE INDEX "User.resetPasswordToken_unique" ON "User"("resetPasswordToken");

-- CreateIndex
CREATE UNIQUE INDEX "User.identifierToken_unique" ON "User"("identifierToken");
