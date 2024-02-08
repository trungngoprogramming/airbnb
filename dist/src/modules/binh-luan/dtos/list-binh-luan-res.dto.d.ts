import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";
declare class BinhLuanDto {
    maPhong: number;
    maNguoiBinhLuan: number;
    saoBinhLuan: number;
    noiDung: string;
}
export declare class ListBinhLuanResDto {
    data: BinhLuanDto[];
    meta: PageMetaDto;
}
export {};
