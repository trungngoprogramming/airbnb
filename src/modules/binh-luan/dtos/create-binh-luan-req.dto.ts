import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Max } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";

export class CreateBinhLuanReqDto {
  @ApiProperty({ example: 1 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  maPhong: number;

  @ApiProperty({ example: 1 })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  maNguoiBinhLuan: number;

  @ApiProperty({ example: 1 })
  @ApiPropertyError('IsNotEmpty', 'Max')
  @Max(5)
  @IsNotEmpty()
  saoBinhLuan: number;

  @ApiProperty({ example: 'Xanh, Sạch, Đẹp' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  noiDung: string;
}
