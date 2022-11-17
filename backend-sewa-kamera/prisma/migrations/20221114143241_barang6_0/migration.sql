/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Barang` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Barang_id_key" ON "Barang"("id");
