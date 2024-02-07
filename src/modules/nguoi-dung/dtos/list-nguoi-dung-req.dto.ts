import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PageReqDto } from "libs/share/src/core/dtos/page-req.dto";

export class ListNguoiDungReqDto extends PageReqDto {
  @ApiProperty({
    example: 'Can search name, email, phone',
    required: false,
  })
  @IsOptional()
  readonly keyword: string;
}
