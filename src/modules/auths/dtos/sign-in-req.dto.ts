import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { sha3512 } from "libs/share/src/core/utils/auth.util";

export class SignInReqDto {
  @ApiProperty({ example: 'email@example.com' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  @Transform(({ value }) => sha3512(value))
  password: string;
}
