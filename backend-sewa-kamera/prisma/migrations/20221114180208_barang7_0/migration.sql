/*
  Warnings:

  - Added the required column `path` to the `Barang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barang" ADD COLUMN     "path" TEXT NOT NULL;
