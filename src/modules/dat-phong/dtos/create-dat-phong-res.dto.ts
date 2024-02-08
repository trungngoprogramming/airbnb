import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CreateDatPhongResDto {
  @Expose()
  @ApiProperty({ example: 1 })
  maPhong: number;

  @Expose()
  @ApiProperty({ example: 1 })
  maNguoiDat: number;

  @Expose()
  @ApiProperty({ example: 1 })
  soLuongKhach: number;

  @Expose()
  @ApiProperty({ example: new Date() })
  ngayDen: string;

  @Expose()
  @ApiProperty({ example: new Date() })
  ngayDi: string;
}
