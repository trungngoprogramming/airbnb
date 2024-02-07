import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";

export class CreatePhongReqDto {
  @ApiProperty({ example: 1 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  maViTri: number;

  @ApiProperty({ example: 'V.I.P' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  tenPhong: string;

  @ApiProperty({ example: 'V.I.P' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  mota: string;

  @ApiProperty({ example: 3 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  khach: number;

  @ApiProperty({ example: 3 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  phongNgu: number;

  @ApiProperty({ example: 3 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  giuong: number;

  @ApiProperty({ example: 3 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  phongTam: number;

  @ApiProperty({ example: 100000 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  giaTien: number;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  mayGiat: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  banLa: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  tivi: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  dieuHoa: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  wifi: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  bep: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  doXe: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  hoBoi: boolean;

  @ApiProperty({ example: true })
  @ApiPropertyError('IsNotEmpty', 'IsBoolean')
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => !!value)
  banUi: boolean;

  @ApiProperty({ type: 'string', format: 'binary' })
  hinhAnh: string;
}
