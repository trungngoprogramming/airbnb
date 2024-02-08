import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PageReqDto } from "libs/share/src/core/dtos/page-req.dto";

export class ListDatPhongReqDto extends PageReqDto {
  @ApiProperty({
    example: 'Can search maPhong, maNguoiDat',
    required: false,
  })
  @IsOptional()
  readonly keyword: string;
}
