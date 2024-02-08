import { SignUpReqDto } from "./dtos/sign-up-req.dto";
import { AuthService } from "./auth.service";
import { SignUpResDto } from "./dtos/sign-up-res.dto";
import { SignInResDto } from "./dtos/sign-in-res.dto";
import { SignInReqDto } from "./dtos/sign-in-req.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupReqDto: SignUpReqDto): Promise<SignUpResDto>;
    signin(signinReqDto: SignInReqDto): Promise<SignInResDto>;
}
