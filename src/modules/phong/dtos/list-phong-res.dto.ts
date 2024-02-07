import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";

export class PhongDto {
  @ApiProperty({ example: 1 })
  maViTri: number;

  @ApiProperty({ example: 'V.I.P' })
  tenPhong: string;

  @ApiProperty({ example: 'V.I.P' })
  moTa: string;

  @ApiProperty({ example: 3 })
  khach: string;

  @ApiProperty({ example: 3 })
  phongNgu: string;

  @ApiProperty({ example: 3 })
  giuong: string;

  @ApiProperty({ example: 3 })
  phongTam: string;

  @ApiProperty({ example: 100000 })
  giaTien: string;

  @ApiProperty({ example: true })
  mayGiat: boolean;

  @ApiProperty({ example: true })
  banLa: boolean;

  @ApiProperty({ example: true })
  tivi: boolean;

  @ApiProperty({ example: true })
  dieuHoa: boolean;

  @ApiProperty({ example: true })
  wifi: boolean;

  @ApiProperty({ example: true })
  bep: boolean;

  @ApiProperty({ example: true })
  doXe: boolean;

  @ApiProperty({ example: true })
  hoBoi: boolean;

  @ApiProperty({ example: true })
  banUi: boolean;

  @ApiProperty({ example: 'data:image/png;base64,60c663d2ccd0381873d8d09bfe8329b0' })
  hinhAnh: string;
}

export class ListPhongResDto {
  @Expose()
  @ApiProperty({
    type: PhongDto,
    isArray: true
  })
  data: PhongDto[];

  @Expose()
  @ApiProperty({ type: PageMetaDto })
  meta: PageMetaDto;
}
