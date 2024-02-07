import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UpdateBinhLuanResDto {
  @Expose()
  @ApiProperty({ example: 1 })
  maPhong: number;

  @Expose()
  @ApiProperty({ example: 1 })
  maNguoiBinhLuan: number;

  @Expose()
  @ApiProperty({ example: 1 })
  saoBinhLuan: number;

  @Expose()
  @ApiProperty({ example: 'Xanh, Sạch, Đẹp' })
  noiDung: string;
}
