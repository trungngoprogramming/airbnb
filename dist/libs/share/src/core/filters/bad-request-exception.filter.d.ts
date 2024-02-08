import { ArgumentsHost, BadRequestException, ExceptionFilter } from '@nestjs/common';
export declare class BadRequestExceptionFilter implements ExceptionFilter<BadRequestException> {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
