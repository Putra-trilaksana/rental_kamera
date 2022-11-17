/*
  Warnings:

  - Changed the type of `harga` on the `Barang` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `disc` on the `Barang` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Barang" DROP COLUMN "harga",
ADD COLUMN     "harga" INTEGER NOT NULL,
DROP COLUMN "disc",
ADD COLUMN     "disc" INTEGER NOT NULL;
