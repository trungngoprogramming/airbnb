/*
  Warnings:

  - Added the required column `noi_dung` to the `BinhLuan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sao_binh_luan` to the `BinhLuan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BinhLuan` ADD COLUMN `noi_dung` VARCHAR(255) NOT NULL,
    ADD COLUMN `sao_binh_luan` INTEGER NOT NULL;
