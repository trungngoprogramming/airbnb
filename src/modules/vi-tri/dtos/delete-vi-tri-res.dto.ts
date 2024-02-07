import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class DeleteViTriResDto {
  @Expose()
  @ApiProperty({ example: 1 })
  readonly id: number;
}
