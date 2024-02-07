import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { NguoiDungController } from "./nguoi-dung.controller";
import { NguoiDungService } from "./nguoi-dung.service";

@Module({
  imports: [PrismaModule],
  controllers: [NguoiDungController],
  providers: [NguoiDungService]
})
export class NguoiDungModule { }
