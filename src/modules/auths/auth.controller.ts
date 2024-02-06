import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { SignUpReqDto } from "./dtos/sign-up-req.dto";
import { AuthService } from "./auth.service";
import { SignUpResDto } from "./dtos/sign-up-res.dto";
import { plainToInstance } from "class-transformer";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  @ApiOperation({
    summary: 'API đăng ký tài khoản',
    description: 'API đăng ký tài khoản',
  })
  @ApiCreatedResponse({ type: SignUpResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'unauthorized', 'forbidden'],
    badRequestTarget: [SignUpReqDto],
    badRequestFromService: [Errors.Common.accountExisted],
  })
  async register(
    @Body() registerReqDto: SignUpReqDto,
  ): Promise<SignUpResDto> {
    const nguoiDung = await this.authService.signup(registerReqDto);

    return plainToInstance(SignUpResDto, nguoiDung);
  }
}
