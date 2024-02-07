import { ApiProperty } from "@nestjs/swagger";

export class UploadHinhAnhPhongReqDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  hinhAnh: string;
}
