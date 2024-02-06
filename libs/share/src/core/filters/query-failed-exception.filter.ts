import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Errors } from '../constants/error.constant';


@Catch(Prisma.PrismaClientKnownRequestError)
export class QueryFailedErrorFilter implements ExceptionFilter {
  async catch(
    error: Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const message = error.message.trim().split('\n').pop();
    let errors: [] | {};
    let status: number;

    if (error.code === 'P2025') {
      status = HttpStatus.NOT_FOUND;
      errors = [
        {
          code: '404',
          resource: message.split(' ')[1],
          message: Errors.Http[404],
        },
      ];
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errors = {
        code: '500',
        message: Errors.Http[500],
      };
    }

    res.status(status).json({ errors });
  }
}
