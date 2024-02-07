import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PageReqDto } from "libs/share/src/core/dtos/page-req.dto";

export class ListPhongReqDto extends PageReqDto {
  @ApiProperty({
    example: 'Can search tenPhong, mota, maViTri',
    required: false,
  })
  @IsOptional()
  readonly keyword: string;
}
