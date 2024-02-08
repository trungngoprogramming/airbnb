import { INestApplication, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
export declare class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error' | 'beforeExit'> implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
