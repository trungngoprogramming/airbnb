import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class InternalServerExceptionFilter implements ExceptionFilter {
    catch(_exception: any, host: ArgumentsHost): void;
}
