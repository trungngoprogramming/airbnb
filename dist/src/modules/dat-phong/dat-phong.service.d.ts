import { CreateDatPhongReqDto } from "./dtos/create-dat-phong-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { ListDatPhongReqDto } from "./dtos/list-dat-phong-req.dto";
import { UpdateDatPhongReqDto } from "./dtos/update-dat-phong-req.dto";
export declare class DatPhongService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDatPhongReqDto: CreateDatPhongReqDto): Promise<{
        id: number;
        maPhong: number;
        maNguoiDat: number;
        ngayDen: Date;
        ngayDi: Date;
        soLuongKhach: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list({ take, page, keyword }: ListDatPhongReqDto): Promise<{
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
        maNguoiDat: number;
        ngayDen: Date;
        ngayDi: Date;
        soLuongKhach: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateDatPhongReqDto: UpdateDatPhongReqDto): Promise<{
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
