import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { ViTriController } from "./vi-tri.controller";
import { ViTriService } from "./vi-tri.service";

@Module({
  imports: [PrismaModule],
  controllers: [ViTriController],
  providers: [ViTriService]
})
export class ViTriModule { }
