import { ApiProperty } from "@nestjs/swagger";

export class UploadViTriHinhAnhReqDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  hinhAnh: string;
}
