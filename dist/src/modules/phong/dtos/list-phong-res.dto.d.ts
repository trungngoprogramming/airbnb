import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";
export declare class PhongDto {
    maViTri: number;
    tenPhong: string;
    moTa: string;
    khach: string;
    phongNgu: string;
    giuong: string;
    phongTam: string;
    giaTien: string;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    hinhAnh: string;
}
export declare class ListPhongResDto {
    data: PhongDto[];
    meta: PageMetaDto;
}
