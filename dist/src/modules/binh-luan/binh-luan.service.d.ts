import { CreateBinhLuanReqDto } from "./dtos/create-binh-luan-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { ListBinhLuanReqDto } from "./dtos/list-binh-luan-req.dto";
import { UpdateBinhLuanReqDto } from "./dtos/update-binh-luan-req.dto";
export declare class BinhLuanService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBinhLuanReqDto: CreateBinhLuanReqDto): Promise<{
        id: number;
        maPhong: number;
        maNguoiBinhLuan: number;
        saoBinhLuan: number;
        noiDung: string;
        ngayBinhLuan: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list({ take, page, keyword }: ListBinhLuanReqDto): Promise<{
        data: any;
        meta: {
            total: any;
            currentPage: number;
            take: number;
        };
    }>;
    detail(id: number): Promise<{
        id: number;
        maPhong: number;
        maNguoiBinhLuan: number;
        saoBinhLuan: number;
        noiDung: string;
        ngayBinhLuan: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateBinhLuanReqDto: UpdateBinhLuanReqDto): Promise<{
        id: number;
        maPhong: number;
        maNguoiBinhLuan: number;
        saoBinhLuan: number;
        noiDung: string;
        ngayBinhLuan: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
}
