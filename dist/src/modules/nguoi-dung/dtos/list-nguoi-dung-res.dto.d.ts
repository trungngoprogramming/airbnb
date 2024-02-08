import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";
declare class NguoiDungDto {
    id: number;
    email: number;
    password: string;
    phone: string;
    birthday: string;
    gender: string;
    role: string;
}
export declare class ListNguoiDungResDto {
    data: NguoiDungDto[];
    meta: PageMetaDto;
}
export {};
