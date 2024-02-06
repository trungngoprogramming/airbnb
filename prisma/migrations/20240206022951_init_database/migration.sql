-- CreateTable
CREATE TABLE `NguoiDung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `pass_word` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `gender` VARCHAR(20) NOT NULL,
    `role` VARCHAR(20) NOT NULL,
    `birth_day` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Phong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maViTri` INTEGER NOT NULL,
    `ten_phong` VARCHAR(255) NOT NULL,
    `mo_ta` VARCHAR(255) NOT NULL,
    `hinh_anh` VARCHAR(255) NOT NULL,
    `khach` INTEGER NOT NULL,
    `phong_ngu` INTEGER NOT NULL,
    `giuong` INTEGER NOT NULL,
    `phong_tam` INTEGER NOT NULL,
    `gia_tien` INTEGER NOT NULL,
    `may_giat` BOOLEAN NOT NULL,
    `ban_la` BOOLEAN NOT NULL,
    `tivi` BOOLEAN NOT NULL,
    `dieu_hoa` BOOLEAN NOT NULL,
    `wifi` BOOLEAN NOT NULL,
    `bep` BOOLEAN NOT NULL,
    `do_xe` BOOLEAN NOT NULL,
    `ho_boi` BOOLEAN NOT NULL,
    `ban_ui` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ViTri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_vi_tri` VARCHAR(255) NOT NULL,
    `tinh_thanh` VARCHAR(255) NOT NULL,
    `hinh_anh` VARCHAR(255) NOT NULL,
    `quoc_gia` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatPhong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_phong` INTEGER NOT NULL,
    `ma_nguoi_dat` INTEGER NOT NULL,
    `ngay_den` DATETIME(3) NOT NULL,
    `ngay_di` DATETIME(3) NOT NULL,
    `so_luong_khach` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BinhLuan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_phong` INTEGER NOT NULL,
    `ma_nguoi_binh_luan` INTEGER NOT NULL,
    `ngay_binh_luan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Phong` ADD CONSTRAINT `Phong_maViTri_fkey` FOREIGN KEY (`maViTri`) REFERENCES `ViTri`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatPhong` ADD CONSTRAINT `DatPhong_ma_phong_fkey` FOREIGN KEY (`ma_phong`) REFERENCES `Phong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatPhong` ADD CONSTRAINT `DatPhong_ma_nguoi_dat_fkey` FOREIGN KEY (`ma_nguoi_dat`) REFERENCES `NguoiDung`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_phong_fkey` FOREIGN KEY (`ma_phong`) REFERENCES `Phong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_nguoi_binh_luan_fkey` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
