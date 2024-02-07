import { Injectable } from "@nestjs/common";
import { CreateBinhLuanReqDto } from "./dtos/create-binh-luan-req.dto";

@Injectable()
export class BinhLuanService {
  async create(createBinhLuanReqDto: CreateBinhLuanReqDto) { }
}
