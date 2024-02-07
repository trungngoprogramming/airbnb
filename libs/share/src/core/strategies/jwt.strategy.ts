import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { NguoiDung } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: NguoiDung) {
    if (!payload) return false;

    return await this.prisma.nguoiDung.findFirst({ where: { email: payload.email } });
  }
}
