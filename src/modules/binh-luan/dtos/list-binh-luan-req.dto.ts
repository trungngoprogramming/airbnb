import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PageReqDto } from "libs/share/src/core/dtos/page-req.dto";

export class ListBinhLuanReqDto extends PageReqDto {
  @ApiProperty({
    example: 'Can search saoBinhLuan, noiDung, maPhong, maNguoiBinhLuan',
    required: false,
  })
  @IsOptional()
  readonly keyword: string;
}
