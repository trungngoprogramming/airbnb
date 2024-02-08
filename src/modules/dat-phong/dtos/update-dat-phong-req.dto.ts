import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, Max } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { getCurrentUser } from "libs/share/src/core/utils/auth.util";

export class UpdateDatPhongReqDto {
  @ApiProperty({ example: 1 })
  @ApiPropertyError('IsNotEmpty')
  @IsNumber()
  @IsNotEmpty()
  maPhong: number;

  @ApiProperty({ example: '//kiểu số, bắt buộc phải truyền nếu là admin, tự động ghi đè nếu là user, nên chỉ cần truyền null' })
  @ApiPropertyError('IsNotEmpty')
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => getCurrentUser().role === 'admin' ? value : getCurrentUser().id)
  maNguoiDat: number;

  @ApiProperty({ example: 1 })
  @ApiPropertyError('IsNotEmpty', 'Max')
  @Max(5)
  @IsNumber()
  @IsNotEmpty()
  soLuongKhach: number;

  @ApiProperty({ example: new Date() })
  @ApiPropertyError('IsNotEmpty')
  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  ngayDen: string;

  @ApiProperty({ example: new Date() })
  @ApiPropertyError('IsNotEmpty')
  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  ngayDi: string;
}
