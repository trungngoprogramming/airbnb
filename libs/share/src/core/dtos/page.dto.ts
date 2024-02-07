import { ApiProperty } from '@nestjs/swagger';

// This file is used to build a paginated response
export class PageDto<T> {
  @ApiProperty({ isArray: true })
  readonly data: T[];
}
