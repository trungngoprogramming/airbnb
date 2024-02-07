import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";

class ViTriDto {
  @Expose()
  @ApiProperty({ example: 'Tôn Đản' })
  tenViTri: string;

  @Expose()
  @ApiProperty({ example: 'Đà Nẵng' })
  tinhThanh: string;

  @Expose()
  @ApiProperty({ example: 'Việt Nam' })
  quocGia: string;

  @Expose()
  @ApiProperty({ example: 'data:image/png;base64,60c663d2ccd0381873d8d09bfe8329b0' })
  hinhAnh: string;
}

export class ListViTriResDto {
  @Expose()
  @ApiProperty({
    type: ViTriDto,
    isArray: true
  })
  data: ViTriDto[];

  @Expose()
  @ApiProperty({ type: PageMetaDto })
  meta: PageMetaDto;
}
