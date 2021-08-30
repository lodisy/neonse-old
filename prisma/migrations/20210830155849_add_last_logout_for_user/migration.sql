/*
  Warnings:

  - You are about to drop the column `jwtToken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accessToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accessToken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User.jwtToken_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "jwtToken",
ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "lastLogoutAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "User.accessToken_unique" ON "User"("accessToken");
