import { ForbiddenException, Injectable } from "@nestjs/common";
import { CreateBinhLuanReqDto } from "./dtos/create-binh-luan-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { ListBinhLuanReqDto } from "./dtos/list-binh-luan-req.dto";
import { paginate } from "libs/share/src/core/utils/paginate.util";
import { UpdateBinhLuanReqDto } from "./dtos/update-binh-luan-req.dto";
import { getCurrentUser } from "libs/share/src/core/utils/auth.util";
import { isEmpty, isNaN } from "lodash";

@Injectable()
export class BinhLuanService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createBinhLuanReqDto: CreateBinhLuanReqDto) {
    return await this.prisma.binhLuan.create({
      data: createBinhLuanReqDto
    });
  }

  async list({ take, page, keyword }: ListBinhLuanReqDto) {
    const args: Prisma.BinhLuanFindManyArgs = {};

    if (keyword) args.where = {
      OR: [
        { noiDung: { contains: keyword } },
      ]
    }

    if (!isNaN(Number(keyword))) {
      args.where['OR'].push(
        { saoBinhLuan: Number(keyword) },
        { maPhong: Number(keyword) },
        { maNguoiBinhLuan: Number(keyword) }
      );
    }

    if (keyword && isEmpty(args.where)) args.where = { id: 0 }

    return await paginate(this.prisma.binhLuan, args, page, take);
  }

  async detail(id: number) {
    return await this.prisma.binhLuan.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateBinhLuanReqDto: UpdateBinhLuanReqDto) {
    const binhLuan = await this.detail(id);
    if (getCurrentUser().id !== binhLuan.maNguoiBinhLuan) {
      throw new ForbiddenException();
    }

    return await this.prisma.binhLuan.update({ where: { id }, data: updateBinhLuanReqDto });
  }

  async delete(id: number) {
    const binhLuan = await this.detail(id);
    if (getCurrentUser().id !== binhLuan.maNguoiBinhLuan) {
      throw new ForbiddenException();
    }

    await this.prisma.binhLuan.delete({ where: { id } });

    return { id };
  }
}
