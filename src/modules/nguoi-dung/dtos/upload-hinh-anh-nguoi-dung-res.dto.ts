import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UploadHinhAnhNguoiDungResDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: 'example@email.com' })
  email: number;

  @Expose()
  @ApiProperty({ example: 'password' })
  password: string;

  @Expose()
  @ApiProperty({ example: '0354030301' })
  phone: string;

  @Expose()
  @ApiProperty({ example: new Date() })
  birthday: string

  @Expose()
  @ApiProperty({ example: 'Male' })
  gender: string;

  @Expose()
  @ApiProperty({ example: 'editor' })
  role: string;
}
