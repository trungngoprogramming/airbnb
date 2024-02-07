import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";

export class UpdateViTriReqDto {
  @ApiProperty({ example: 'Tôn Đản' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  tenViTri: string;

  @ApiProperty({ example: 'Đà Nẵng' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  tinhThanh: string;

  @ApiProperty({ example: 'Việt Nam' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  quocGia: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  hinhAnh: string;
}
