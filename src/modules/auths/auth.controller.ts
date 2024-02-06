import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { SignUpReqDto } from "./dtos/sign-up-req.dto";
import { AuthService } from "./auth.service";
import { SignUpResDto } from "./dtos/sign-up-res.dto";
import { plainToInstance } from "class-transformer";
import { SignInResDto } from "./dtos/sign-in-res.dto";
import { SignInReqDto } from "./dtos/sign-in-req.dto";

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
  async signup(
    @Body() signupReqDto: SignUpReqDto,
  ): Promise<SignUpResDto> {
    const nguoiDung = await this.authService.signup(signupReqDto);

    return plainToInstance(SignUpResDto, nguoiDung);
  }

  @Post('signin')
  @ApiOperation({
    summary: 'API đăng nhập tài khoản',
    description: 'API đăng nhập tài khoản',
  })
  @ApiCreatedResponse({ type: SignInResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'unauthorized', 'forbidden'],
    badRequestTarget: [SignInReqDto],
  })
  async signin(
    @Body() signinReqDto: SignInReqDto,
  ): Promise<SignInResDto> {
    const nguoiDung = await this.authService.signin(signinReqDto);

    return plainToInstance(SignInResDto, nguoiDung);
  }
}
