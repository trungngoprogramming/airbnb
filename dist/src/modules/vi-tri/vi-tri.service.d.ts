import { CreateViTriReqDto } from "./dtos/create-vi-tri-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { ListViTriReqDto } from "./dtos/list-vi-tri-req.dto";
import { UpdateViTriReqDto } from "./dtos/update-vi-tri-req.dto";
import { UploadViTriHinhAnhReqDto } from "./dtos/upload-vi-tri-hinh-anh-req.dto";
export declare class ViTriService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createViTriReqDto: CreateViTriReqDto): Promise<{
        id: number;
        tenViTri: string;
        tinhThanh: string;
        hinhAnh: string;
        quocGia: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list({ take, page, keyword }: ListViTriReqDto): Promise<{
        data: any;
        meta: {
            total: any;
            currentPage: number;
            take: number;
        };
    }>;
    detail(id: number): Promise<{
        id: number;
        tenViTri: string;
        tinhThanh: string;
        hinhAnh: string;
        quocGia: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateViTriReqDto: UpdateViTriReqDto): Promise<{
        id: number;
        tenViTri: string;
        tinhThanh: string;
        hinhAnh: string;
        quocGia: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateImg(id: number, uploadViTriHinhAnhResDto: UploadViTriHinhAnhReqDto): Promise<{
        id: number;
        tenViTri: string;
        tinhThanh: string;
        hinhAnh: string;
        quocGia: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
}
