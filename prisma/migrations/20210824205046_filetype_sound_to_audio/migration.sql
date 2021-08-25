/*
  Warnings:

  - The values [SOUND] on the enum `FileType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FileType_new" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'BINARY');
ALTER TABLE "File" ALTER COLUMN "format" TYPE "FileType_new" USING ("format"::text::"FileType_new");
ALTER TYPE "FileType" RENAME TO "FileType_old";
ALTER TYPE "FileType_new" RENAME TO "FileType";
DROP TYPE "FileType_old";
COMMIT;
