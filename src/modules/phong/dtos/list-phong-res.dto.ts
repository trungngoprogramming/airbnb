import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { PageMetaDto } from "libs/share/src/core/dtos/page-meta.dto";

export class PhongDto {
  @Expose()
  @ApiProperty({ example: 1 })
  maViTri: number;

  @Expose()
  @ApiProperty({ example: 'V.I.P' })
  tenPhong: string;

  @Expose()
  @ApiProperty({ example: 'V.I.P' })
  moTa: string;

  @Expose()
  @ApiProperty({ example: 3 })
  khach: string;

  @Expose()
  @ApiProperty({ example: 3 })
  phongNgu: string;

  @Expose()
  @ApiProperty({ example: 3 })
  giuong: string;

  @Expose()
  @ApiProperty({ example: 3 })
  phongTam: string;

  @Expose()
  @ApiProperty({ example: 100000 })
  giaTien: string;

  @Expose()
  @ApiProperty({ example: true })
  mayGiat: boolean;

  @Expose()
  @ApiProperty({ example: true })
  banLa: boolean;

  @Expose()
  @ApiProperty({ example: true })
  tivi: boolean;

  @Expose()
  @ApiProperty({ example: true })
  dieuHoa: boolean;

  @Expose()
  @ApiProperty({ example: true })
  wifi: boolean;

  @Expose()
  @ApiProperty({ example: true })
  bep: boolean;

  @Expose()
  @ApiProperty({ example: true })
  doXe: boolean;

  @Expose()
  @ApiProperty({ example: true })
  hoBoi: boolean;

  @Expose()
  @ApiProperty({ example: true })
  banUi: boolean;

  @Expose()
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
