import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { BinhLuanController } from "./binh-luan.controller";
import { BinhLuanService } from "./binh-luan.service";

@Module({
  imports: [PrismaModule],
  controllers: [BinhLuanController],
  providers: [BinhLuanService]
})
export class BinhLuanModule { }
