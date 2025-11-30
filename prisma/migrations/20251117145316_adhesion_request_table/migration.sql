/*
  Warnings:

  - You are about to drop the column `motivation` on the `Adherent` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AdherentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AdhesionRequestStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Adherent" DROP COLUMN "motivation",
ADD COLUMN     "status" "AdherentStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "AdhesionRequest" (
    "id" SERIAL NOT NULL,
    "adherentId" INTEGER NOT NULL,
    "motivation" TEXT NOT NULL,
    "status" "AdhesionRequestStatus" NOT NULL DEFAULT 'SUBMITTED',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdhesionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdhesionRequest_adherentId_key" ON "AdhesionRequest"("adherentId");

-- AddForeignKey
ALTER TABLE "AdhesionRequest" ADD CONSTRAINT "AdhesionRequest_adherentId_fkey" FOREIGN KEY ("adherentId") REFERENCES "Adherent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
