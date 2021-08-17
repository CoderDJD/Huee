/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "github" DROP NOT NULL,
ALTER COLUMN "twitter" DROP NOT NULL,
ALTER COLUMN "youtube" DROP NOT NULL,
ALTER COLUMN "discord" DROP NOT NULL,
ALTER COLUMN "bmc" DROP NOT NULL,
ALTER COLUMN "applicationUrl" DROP NOT NULL,
ALTER COLUMN "ytWebhook" DROP NOT NULL,
ALTER COLUMN "bmcWebhook" DROP NOT NULL,
ALTER COLUMN "twtrWebhook" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "github" DROP NOT NULL,
ALTER COLUMN "twitter" DROP NOT NULL,
ALTER COLUMN "youtube" DROP NOT NULL;
