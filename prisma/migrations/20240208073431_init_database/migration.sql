-- CreateTable
CREATE TABLE "NguoiDung" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "pass_word" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "gender" VARCHAR(20) NOT NULL,
    "role" VARCHAR(20) NOT NULL,
    "hinh_anh" TEXT,
    "birth_day" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NguoiDung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phong" (
    "id" SERIAL NOT NULL,
    "maViTri" INTEGER NOT NULL,
    "ten_phong" VARCHAR(255) NOT NULL,
    "mo_ta" VARCHAR(255) NOT NULL,
    "hinh_anh" TEXT NOT NULL,
    "khach" INTEGER NOT NULL,
    "phong_ngu" INTEGER NOT NULL,
    "giuong" INTEGER NOT NULL,
    "phong_tam" INTEGER NOT NULL,
    "gia_tien" INTEGER NOT NULL,
    "may_giat" BOOLEAN NOT NULL,
    "ban_la" BOOLEAN NOT NULL,
    "tivi" BOOLEAN NOT NULL,
    "dieu_hoa" BOOLEAN NOT NULL,
    "wifi" BOOLEAN NOT NULL,
    "bep" BOOLEAN NOT NULL,
    "do_xe" BOOLEAN NOT NULL,
    "ho_boi" BOOLEAN NOT NULL,
    "ban_ui" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Phong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViTri" (
    "id" SERIAL NOT NULL,
    "ten_vi_tri" VARCHAR(255) NOT NULL,
    "tinh_thanh" VARCHAR(255) NOT NULL,
    "hinh_anh" TEXT NOT NULL,
    "quoc_gia" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ViTri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatPhong" (
    "id" SERIAL NOT NULL,
    "ma_phong" INTEGER NOT NULL,
    "ma_nguoi_dat" INTEGER NOT NULL,
    "ngay_den" TIMESTAMP(3) NOT NULL,
    "ngay_di" TIMESTAMP(3) NOT NULL,
    "so_luong_khach" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DatPhong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinhLuan" (
    "id" SERIAL NOT NULL,
    "ma_phong" INTEGER NOT NULL,
    "ma_nguoi_binh_luan" INTEGER NOT NULL,
    "sao_binh_luan" INTEGER NOT NULL,
    "noi_dung" VARCHAR(255) NOT NULL,
    "ngay_binh_luan" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BinhLuan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Phong" ADD CONSTRAINT "Phong_maViTri_fkey" FOREIGN KEY ("maViTri") REFERENCES "ViTri"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatPhong" ADD CONSTRAINT "DatPhong_ma_phong_fkey" FOREIGN KEY ("ma_phong") REFERENCES "Phong"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatPhong" ADD CONSTRAINT "DatPhong_ma_nguoi_dat_fkey" FOREIGN KEY ("ma_nguoi_dat") REFERENCES "NguoiDung"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinhLuan" ADD CONSTRAINT "BinhLuan_ma_phong_fkey" FOREIGN KEY ("ma_phong") REFERENCES "Phong"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinhLuan" ADD CONSTRAINT "BinhLuan_ma_nguoi_binh_luan_fkey" FOREIGN KEY ("ma_nguoi_binh_luan") REFERENCES "NguoiDung"("id") ON DELETE CASCADE ON UPDATE CASCADE;
