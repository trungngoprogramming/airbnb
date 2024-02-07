import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateNguoiDungReqDto } from "./dtos/create-nguoi-dung-req.dto";
import { PrismaService } from "prisma/prisma.service";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { ListNguoiDungReqDto } from "./dtos/list-nguoi-dung-req.dto";
import { Prisma } from "@prisma/client";
import { paginate } from "libs/share/src/core/utils/paginate.util";
import { UpdateNguoiDungReqDto } from "./dtos/update-nguoi-dung-req.dto";
import { UploadHinhAnhNguoiDungReqDto } from "./dtos/upload-hinh-anh-nguoi-dung-req.dto";

@Injectable()
export class NguoiDungService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createNguoiDungReqDto: CreateNguoiDungReqDto) {
    const user = await this.prisma.nguoiDung.findFirst({ where: { email: createNguoiDungReqDto.email } });

    if (user) throw new BadRequestException(Errors.Common.accountExisted);

    return await this.prisma.nguoiDung.create({ data: createNguoiDungReqDto });
  }

  async list({ take, page, keyword }: ListNguoiDungReqDto) {
    const args: Prisma.NguoiDungFindManyArgs = {};
    if (keyword) args.where = {
      OR: [
        { name: { contains: keyword } },
        { email: { contains: keyword } },
        { phone: { contains: keyword } }
      ]
    }

    return await paginate(this.prisma.nguoiDung, args, page, take);
  }

  async detail(id: number) {
    return await this.prisma.nguoiDung.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateNguoiDungReqDto: UpdateNguoiDungReqDto) {
    await this.detail(id);

    return await this.prisma.nguoiDung.update({ where: { id }, data: updateNguoiDungReqDto });
  }

  async delete(id: number) {
    await this.detail(id);
    await this.prisma.nguoiDung.delete({ where: { id } });

    return { id };
  }

  async updateImg(id: number, uploadViTriHinhAnhResDto: UploadHinhAnhNguoiDungReqDto) {
    await this.detail(id);

    return await this.prisma.nguoiDung.update({ where: { id }, data: uploadViTriHinhAnhResDto });
  }
}
