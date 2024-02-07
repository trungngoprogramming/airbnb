import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PageMetaDto {
  @ApiProperty({ required: true, default: 10, example: 10 })
  @Expose()
  readonly take: number;

  @ApiProperty({ required: true, default: 100, example: 100 })
  @ApiProperty()
  @Expose()
  readonly total: number;

  @ApiProperty({ required: true, default: 1, example: 1 })
  @Expose()
  readonly currentPage: number;
}
