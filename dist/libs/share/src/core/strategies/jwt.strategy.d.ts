import { NguoiDung } from "@prisma/client";
import { Strategy } from "passport-jwt";
import { PrismaService } from "prisma/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: NguoiDung): Promise<false | {
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
}
export {};
