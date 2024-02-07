import { ApiProperty } from "@nestjs/swagger";

export class UploadHinhAnhNguoiDungReqDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  hinhAnh: string;
}
