import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { PhongController } from "./phong.controller";
import { PhongService } from "./phong.service";

@Module({
  imports: [PrismaModule],
  controllers: [PhongController],
  providers: [PhongService]
})
export class PhongModule { }
