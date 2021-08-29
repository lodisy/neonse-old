/*
  Warnings:

  - You are about to drop the column `permissions` on the `Role` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Action" AS ENUM ('Manage', 'Create', 'Update', 'Read', 'Delete');

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "permissions";

-- DropEnum
DROP TYPE "Permission";

-- DropEnum
DROP TYPE "Size";

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "action" "Action" NOT NULL,
    "subject" TEXT,
    "fields" TEXT[],
    "conditions" JSONB,
    "inverted" BOOLEAN DEFAULT false,
    "reason" TEXT,
    "roleId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Permission" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
