import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { SignUpReqDto } from "./dtos/sign-up-req.dto";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { SignInReqDto } from "./dtos/sign-in-req.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async signup(signupReqDto: SignUpReqDto) {
    const user = await this.prisma.nguoiDung.findFirst({ where: { email: signupReqDto.email } });

    if (user) throw new BadRequestException(Errors.Common.accountExisted);

    return this.prisma.nguoiDung.create({
      data: signupReqDto,
    })
  }

  async signin({ email, password }: SignInReqDto) {
    const { id, name, role, phone, gender, birthday } = await this.prisma.nguoiDung.findFirst({ where: { email, password } });

    return {
      accessToken: this.jwtService.sign(
        { id, name, email, role, phone, gender, birthday },
        { secret: process.env.JWT_SECRET_KEY }
      )
    };
  }
}
