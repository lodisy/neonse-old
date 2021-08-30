/*
  Warnings:

  - You are about to drop the column `phone` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Role` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "phone",
ADD COLUMN     "mobile" TEXT;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "status",
ADD COLUMN     "enabled" BOOLEAN DEFAULT true;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "mobile" DROP NOT NULL;

-- DropEnum
DROP TYPE "RoleStatus";
