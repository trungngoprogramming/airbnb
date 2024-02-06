import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpStatus,
} from '@nestjs/common';
import { Errors } from '../constants/error.constant';

@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    const status = exception.getStatus();

    res.status(status).json({
      code: HttpStatus.FORBIDDEN,
      message: Errors.Http[403],
    });
  }
}
