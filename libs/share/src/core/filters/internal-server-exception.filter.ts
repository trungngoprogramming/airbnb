import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Errors } from '../constants/error.constant';

@Catch()
export class InternalServerExceptionFilter implements ExceptionFilter {

  catch(_exception: any, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    res.status(status).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: Errors.Http[500],
    });
  }
}
