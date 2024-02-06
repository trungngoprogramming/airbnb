import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { ApiPropertyError } from "libs/share/src/core/decorators/swagger-error-docs.decorator";

export class SignUpReqDto {
  @ApiProperty({ example: 'name' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'email@example.com' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password' })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '0354030301' })
  @ApiPropertyError('IsNotEmpty', 'MaxLength')
  @MaxLength(15)
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: new Date() })
  @ApiPropertyError('IsNotEmpty')
  @IsNotEmpty()
  birthday: Date;

  @ApiProperty({ example: 'gender' })
  @ApiPropertyError('IsNotEmpty', 'MaxLength')
  @MaxLength(20)
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: 'role' })
  @ApiPropertyError('IsNotEmpty', 'MaxLength')
  @MaxLength(20)
  @IsNotEmpty()
  role: string;
}
