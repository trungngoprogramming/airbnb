import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class DeletePhongResDto {
  @Expose()
  @ApiProperty({ example: 1 })
  readonly id: number;
}
