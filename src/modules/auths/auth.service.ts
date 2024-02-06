import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { SignUpReqDto } from "./dtos/sign-up-req.dto";
import { Errors } from "libs/share/src/core/constants/error.constant";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async signup(registerReqDto: SignUpReqDto) {
    const user = await this.prisma.nguoiDung.findFirst({ where: { email: registerReqDto.email } });

    if (user) throw new BadRequestException(Errors.Common.accountExisted);

    return this.prisma.nguoiDung.create({
      data: registerReqDto,
    })
  }
}
