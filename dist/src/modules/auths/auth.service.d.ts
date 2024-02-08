import { PrismaService } from "prisma/prisma.service";
import { SignUpReqDto } from "./dtos/sign-up-req.dto";
import { SignInReqDto } from "./dtos/sign-in-req.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signup(signupReqDto: SignUpReqDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string;
        gender: string;
        role: string;
        hinhAnh: string;
        birthday: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    signin({ email, password }: SignInReqDto): Promise<{
        accessToken: string;
    }>;
}
