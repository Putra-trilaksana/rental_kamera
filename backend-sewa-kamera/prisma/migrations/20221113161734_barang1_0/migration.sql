-- CreateTable
CREATE TABLE "Barang" (
    "id" SERIAL NOT NULL,
    "jenis" TEXT NOT NULL,
    "merek" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "disc" TEXT NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Barang_jenis_key" ON "Barang"("jenis");
