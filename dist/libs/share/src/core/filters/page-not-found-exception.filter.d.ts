import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class PageNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
