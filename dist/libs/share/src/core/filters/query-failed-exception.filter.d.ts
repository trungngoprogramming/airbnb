import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Prisma } from '@prisma/client';
export declare class QueryFailedErrorFilter implements ExceptionFilter {
    catch(error: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): Promise<void>;
}
