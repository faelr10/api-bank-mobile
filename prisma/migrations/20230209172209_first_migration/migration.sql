/*
  Warnings:

  - A unique constraint covering the columns `[keyPix]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "keyPix" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "profile_keyPix_key" ON "profile"("keyPix");
