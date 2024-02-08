import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class DeleteDatPhongResDto {
  @Expose()
  @ApiProperty({ example: 1 })
  readonly id: number;
}
