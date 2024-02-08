import { CreateNguoiDungReqDto } from "./dtos/create-nguoi-dung-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { ListNguoiDungReqDto } from "./dtos/list-nguoi-dung-req.dto";
import { UpdateNguoiDungReqDto } from "./dtos/update-nguoi-dung-req.dto";
import { UploadHinhAnhNguoiDungReqDto } from "./dtos/upload-hinh-anh-nguoi-dung-req.dto";
export declare class NguoiDungService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createNguoiDungReqDto: CreateNguoiDungReqDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string;
        gender: string;
        role: string;
        hinhAnh: string;
        birthday: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list({ take, page, keyword }: ListNguoiDungReqDto): Promise<{
        data: any;
        meta: {
            total: any;
            currentPage: number;
            take: number;
        };
    }>;
    detail(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string;
        gender: string;
        role: string;
        hinhAnh: string;
        birthday: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateNguoiDungReqDto: UpdateNguoiDungReqDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string;
        gender: string;
        role: string;
        hinhAnh: string;
        birthday: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
    updateImg(id: number, uploadViTriHinhAnhResDto: UploadHinhAnhNguoiDungReqDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string;
        gender: string;
        role: string;
        hinhAnh: string;
        birthday: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
