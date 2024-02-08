import { PrismaService } from "prisma/prisma.service";
import { CreatePhongReqDto } from "./dtos/create-phong-req.dto";
import { ListPhongReqDto } from "./dtos/list-phong-req.dto";
import { UploadViTriHinhAnhReqDto } from "../vi-tri/dtos/upload-vi-tri-hinh-anh-req.dto";
export declare class PhongService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPhongReqDto: CreatePhongReqDto): Promise<{
        id: number;
        maViTri: number;
        tenPhong: string;
        mota: string;
        hinhAnh: string;
        khach: number;
        phongNgu: number;
        giuong: number;
        phongTam: number;
        giaTien: number;
        mayGiat: boolean;
        banLa: boolean;
        tivi: boolean;
        dieuHoa: boolean;
        wifi: boolean;
        bep: boolean;
        doXe: boolean;
        hoBoi: boolean;
        banUi: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list({ take, page, keyword }: ListPhongReqDto): Promise<{
        data: any;
        meta: {
            total: any;
            currentPage: number;
            take: number;
        };
    }>;
    detail(id: number): Promise<{
        id: number;
        maViTri: number;
        tenPhong: string;
        mota: string;
        hinhAnh: string;
        khach: number;
        phongNgu: number;
        giuong: number;
        phongTam: number;
        giaTien: number;
        mayGiat: boolean;
        banLa: boolean;
        tivi: boolean;
        dieuHoa: boolean;
        wifi: boolean;
        bep: boolean;
        doXe: boolean;
        hoBoi: boolean;
        banUi: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateImg(id: number, uploadViTriHinhAnhResDto: UploadViTriHinhAnhReqDto): Promise<{
        id: number;
        maViTri: number;
        tenPhong: string;
        mota: string;
        hinhAnh: string;
        khach: number;
        phongNgu: number;
        giuong: number;
        phongTam: number;
        giaTien: number;
        mayGiat: boolean;
        banLa: boolean;
        tivi: boolean;
        dieuHoa: boolean;
        wifi: boolean;
        bep: boolean;
        doXe: boolean;
        hoBoi: boolean;
        banUi: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
}
