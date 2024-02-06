import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Errors } from '../constants/error.constant';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    const status = exception.getStatus();
    res.status(status).json({
      code: HttpStatus.UNAUTHORIZED,
      message: Errors.Http[401],
    });
  }
}
