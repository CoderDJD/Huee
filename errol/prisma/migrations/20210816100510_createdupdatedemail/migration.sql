/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `github` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User.email_unique";

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "patreon" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "createdAt" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TEXT NOT NULL,
ALTER COLUMN "github" SET NOT NULL;
