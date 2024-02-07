import { Injectable } from "@nestjs/common";
import { CreateViTriReqDto } from "./dtos/create-vi-tri-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { ListViTriReqDto } from "./dtos/list-vi-tri-req.dto";
import { paginate } from "libs/share/src/core/utils/paginate.util";
import { Prisma } from "@prisma/client";
import { UpdateViTriReqDto } from "./dtos/update-vi-tri-req.dto";
import { UploadViTriHinhAnhReqDto } from "./dtos/upload-vi-tri-hinh-anh-req.dto";

@Injectable()
export class ViTriService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createViTriReqDto: CreateViTriReqDto) {
    return await this.prisma.viTri.create({
      data: createViTriReqDto
    });
  }

  async list({ take, page, keyword }: ListViTriReqDto) {
    const args: Prisma.ViTriFindManyArgs = {};
    if (keyword) args.where = {
      OR: [
        { tenViTri: { contains: keyword } },
        { tinhThanh: { contains: keyword } },
        { quocGia: { contains: keyword } }
      ]
    }

    return await paginate(this.prisma.viTri, args, page, take);
  }

  async detail(id: number) {
    return await this.prisma.viTri.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateViTriReqDto: UpdateViTriReqDto) {
    await this.detail(id);

    return await this.prisma.viTri.update({ where: { id }, data: updateViTriReqDto });
  }

  async updateImg(id: number, uploadViTriHinhAnhResDto: UploadViTriHinhAnhReqDto) {
    await this.detail(id);

    return await this.prisma.viTri.update({ where: { id }, data: uploadViTriHinhAnhResDto });
  }

  async delete(id: number) {
    await this.detail(id);
    await this.prisma.viTri.delete({ where: { id } });

    return { id };
  }
}
