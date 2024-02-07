import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";

class BinhLuanDto {
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

export class ListBinhLuanResDto {
  @Expose()
  @ApiProperty({
    type: BinhLuanDto,
    isArray: true
  })
  data: BinhLuanDto[];

  @Expose()
  @ApiProperty({ type: PageMetaDto })
  meta: PageMetaDto;
}
