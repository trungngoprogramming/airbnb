import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";
declare class DatPhongDto {
    id: number;
    maPhong: number;
    maNguoiDat: number;
    soLuongKhach: number;
    ngayDen: string;
    ngayDi: string;
}
export declare class ListDatPhongResDto {
    data: DatPhongDto[];
    meta: PageMetaDto;
}
export {};
