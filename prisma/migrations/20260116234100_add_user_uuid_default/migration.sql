/*
  Warnings:

  - A unique constraint covering the columns `[adherentId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "adherentId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_adherentId_key" ON "User"("adherentId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_adherentId_fkey" FOREIGN KEY ("adherentId") REFERENCES "Adherent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
