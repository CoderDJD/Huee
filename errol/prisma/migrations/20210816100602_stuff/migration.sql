/*
  Warnings:

  - You are about to drop the column `patreon` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "patreon",
ADD COLUMN     "ptr" TEXT,
ADD COLUMN     "ptrWebhook" TEXT;
