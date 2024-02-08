import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreatePhongReqDto } from "./dtos/create-phong-req.dto";
import { ListPhongReqDto } from "./dtos/list-phong-req.dto";
import { Prisma } from "@prisma/client";
import { paginate } from "libs/share/src/core/utils/paginate.util";
import { UploadViTriHinhAnhReqDto } from "../vi-tri/dtos/upload-vi-tri-hinh-anh-req.dto";
import { isEmpty } from "lodash";

@Injectable()
export class PhongService {
  constructor(
    private prisma: PrismaService,
  ) { }
  async create(createPhongReqDto: CreatePhongReqDto) {
    await this.prisma.viTri.findFirstOrThrow({ where: { id: createPhongReqDto.maViTri } });

    return await this.prisma.phong.create({
      data: createPhongReqDto
    });
  }

  async list({ take, page, keyword }: ListPhongReqDto) {
    const args: Prisma.PhongFindManyArgs = {};
    if (keyword) args.where = {
      OR: [
        { tenPhong: { contains: keyword } },
        { mota: { contains: keyword } },
      ]
    }

    if (!isNaN(Number(keyword))) {
      args.where['OR'].push(
        { maViTri: Number(keyword) },
      );
    }

    if (keyword && isEmpty(args.where)) args.where = { id: 0 }

    return await paginate(this.prisma.phong, args, page, take);
  }

  async detail(id: number) {
    return await this.prisma.phong.findFirstOrThrow({ where: { id } });
  }

  async updateImg(id: number, uploadViTriHinhAnhResDto: UploadViTriHinhAnhReqDto) {
    await this.detail(id);

    return await this.prisma.phong.update({ where: { id }, data: uploadViTriHinhAnhResDto });
  }

  async delete(id: number) {
    await this.detail(id);
    await this.prisma.phong.delete({ where: { id } });

    return { id };
  }
}
