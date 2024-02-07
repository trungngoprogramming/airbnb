import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ApiPropertyError } from '../decorators/swagger-error-docs.decorator';


export class PageReqDto {
  @ApiProperty({
    description: 'Page number',
    example: 1,
    required: false,
  })
  @Transform(({ value }) => Number(value))
  @ApiPropertyError('IsNumber', 'Max', 'Min')
  @Max(Number.MAX_SAFE_INTEGER)
  @Min(1)
  @IsNumber()
  @IsOptional()
  readonly page: number;

  @ApiProperty({
    description: 'Number record in one page',
    example: 10,
    required: false,
  })
  @Transform(({ value }) => Number(value))
  @ApiPropertyError('IsNumber', 'Max', 'Min')
  @Max(100)
  @Min(1)
  @IsNumber()
  @IsOptional()
  readonly take: number;
}
