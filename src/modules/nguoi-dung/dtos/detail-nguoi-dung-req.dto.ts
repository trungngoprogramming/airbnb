import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";

export class DetailNguoiDungReqDto {
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
