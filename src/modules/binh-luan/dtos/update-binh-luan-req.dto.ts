import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";

export class IdBinhLuanReqDto {
  @ApiProperty({
    description: 'Id number',
    example: 1,
    required: true,
  })
  @Transform(({ value }) => Number(value))
  @ApiPropertyError('IsNotEmpty', 'IsNumber', 'Min')
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
}

export class UpdateBinhLuanReqDto {
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
