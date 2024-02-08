import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";

class DatPhongDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

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

export class ListDatPhongResDto {
  @Expose()
  @ApiProperty({
    type: DatPhongDto,
    isArray: true
  })
  data: DatPhongDto[];

  @Expose()
  @ApiProperty({ type: PageMetaDto })
  meta: PageMetaDto;
}
