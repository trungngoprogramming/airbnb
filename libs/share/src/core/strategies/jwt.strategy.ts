import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { NguoiDung } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate({ id, name, email, role, phone, gender, birthday }: NguoiDung) {
    return { id, name, email, role, phone, gender, birthday }
  }
}
