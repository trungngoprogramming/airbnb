import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { DatPhongController } from "./dat-phong.controller";
import { DatPhongService } from "./dat-phong.service";

@Module({
  imports: [PrismaModule],
  controllers: [DatPhongController],
  providers: [DatPhongService]
})
export class DatPhongModule { }
