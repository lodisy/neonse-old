/*
  Warnings:

  - A unique constraint covering the columns `[mobile]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mobile` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isEmailConfirmed" BOOLEAN DEFAULT false,
ADD COLUMN     "isMobileConfirmed" BOOLEAN DEFAULT false,
ADD COLUMN     "mobile" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.mobile_unique" ON "User"("mobile");
