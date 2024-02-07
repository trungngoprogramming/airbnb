-- DropForeignKey
ALTER TABLE `BinhLuan` DROP FOREIGN KEY `BinhLuan_ma_nguoi_binh_luan_fkey`;

-- DropForeignKey
ALTER TABLE `BinhLuan` DROP FOREIGN KEY `BinhLuan_ma_phong_fkey`;

-- DropForeignKey
ALTER TABLE `DatPhong` DROP FOREIGN KEY `DatPhong_ma_nguoi_dat_fkey`;

-- DropForeignKey
ALTER TABLE `DatPhong` DROP FOREIGN KEY `DatPhong_ma_phong_fkey`;

-- DropForeignKey
ALTER TABLE `Phong` DROP FOREIGN KEY `Phong_maViTri_fkey`;

-- AddForeignKey
ALTER TABLE `Phong` ADD CONSTRAINT `Phong_maViTri_fkey` FOREIGN KEY (`maViTri`) REFERENCES `ViTri`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatPhong` ADD CONSTRAINT `DatPhong_ma_phong_fkey` FOREIGN KEY (`ma_phong`) REFERENCES `Phong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatPhong` ADD CONSTRAINT `DatPhong_ma_nguoi_dat_fkey` FOREIGN KEY (`ma_nguoi_dat`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_phong_fkey` FOREIGN KEY (`ma_phong`) REFERENCES `Phong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_nguoi_binh_luan_fkey` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
