import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";
declare class ViTriDto {
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}
export declare class ListViTriResDto {
    data: ViTriDto[];
    meta: PageMetaDto;
}
export {};
