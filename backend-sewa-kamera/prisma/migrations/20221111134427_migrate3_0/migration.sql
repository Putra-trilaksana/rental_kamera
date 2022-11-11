/*
  Warnings:

  - You are about to drop the column `jaminan` on the `User` table. All the data in the column will be lost.
  - Added the required column `jaminan` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "jaminan" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "jaminan";
