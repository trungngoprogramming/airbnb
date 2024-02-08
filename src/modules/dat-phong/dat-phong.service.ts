import { Injectable } from "@nestjs/common";
import { CreateDatPhongReqDto } from "./dtos/create-dat-phong-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { ListDatPhongReqDto } from "./dtos/list-dat-phong-req.dto";
import { Prisma } from "@prisma/client";
import { paginate } from "libs/share/src/core/utils/paginate.util";
import { getCurrentUser } from "libs/share/src/core/utils/auth.util";
import { isNaN } from "lodash";
import { UpdateDatPhongReqDto } from "./dtos/update-dat-phong-req.dto";

@Injectable()
export class DatPhongService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createDatPhongReqDto: CreateDatPhongReqDto) {
    await this.prisma.phong.findFirstOrThrow({ where: { id: createDatPhongReqDto.maPhong } });

    return await this.prisma.datPhong.create({
      data: createDatPhongReqDto
    });
  }

  async list({ take, page, keyword }: ListDatPhongReqDto) {
    const args: Prisma.DatPhongFindManyArgs = { where: {} };
    if (!isNaN(Number(keyword))) {
      args.where['OR'] = [
        { maPhong: Number(keyword) },
        { maNguoiDat: Number(keyword) }
      ];
    }

    if (keyword && !args.where.OR.length) args.where = { id: 0 }

    if (getCurrentUser().role !== 'admin') {
      args['where']['maNguoiDat'] = getCurrentUser().id;
    }

    return await paginate(this.prisma.datPhong, args, page, take);
  }

  async detail(id: number) {
    const args: Prisma.DatPhongFindFirstOrThrowArgs = { where: { id } };
    if (getCurrentUser().role !== 'admin') args.where.maNguoiDat = getCurrentUser().id;

    return await this.prisma.datPhong.findFirstOrThrow(args);
  }

  async update(id: number, updateDatPhongReqDto: UpdateDatPhongReqDto) {
    await this.detail(id);
    await this.prisma.nguoiDung.findFirstOrThrow({ where: { id: updateDatPhongReqDto.maNguoiDat } });

    return await this.prisma.datPhong.update({ where: { id }, data: updateDatPhongReqDto });
  }

  async delete(id: number) {
    await this.detail(id);
    await this.prisma.viTri.delete({ where: { id } });

    return { id };
  }
}
