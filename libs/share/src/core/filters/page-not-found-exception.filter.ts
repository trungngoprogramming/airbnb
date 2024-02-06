import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Errors } from '../constants/error.constant';

@Catch(NotFoundException)
export class PageNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    const status = exception.getStatus();

    res.status(status).json({
      code: HttpStatus.NOT_FOUND,
      message: Errors.Http[404],
    });
  }
}
