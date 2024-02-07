import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { ValidationError, isArray } from 'class-validator';
import { first, isEmpty, replace } from 'lodash';
import { Errors } from '../constants/error.constant';

const validationError = (error: ValidationError) => {
  let errorObject: ValidationError;

  if (isEmpty(error.children)) {
    errorObject = error;
  } else {
    errorObject = first(error.children);

    while (!isEmpty(errorObject.children)) {
      errorObject = first(errorObject.children);
    }
  }

  const field: string = errorObject.property;
  const errName: string = first(Object.keys(errorObject.constraints));
  let code: string = Errors.Common[errName]?.code;
  const errMsg: string = first(Object.values(errorObject.constraints));
  const regexValueNumber = errMsg.match(/\d+/);
  const regexValueIn = errMsg.slice(errMsg.indexOf(":") + 1);
  let message: string = code
    ? Errors.Common[errName].message
    : undefined;

  message = replace(
    message,
    /{valueNumber}/,
    regexValueNumber && regexValueNumber[0],
  );

  message = replace(
    message,
    /{valueIn}/,
    regexValueIn,
  );

  return {
    resource: error.target?.constructor.name,
    field,
    code,
    message,
  };
}

@Catch(BadRequestException)
export class BadRequestExceptionFilter
  implements ExceptionFilter<BadRequestException>
{
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const exceptionRes: any = exception.getResponse();
    const messages: [] = exceptionRes.message;
    const res = host.switchToHttp().getResponse();
    const errors = isArray(messages)
      ? messages.map((e: any) =>
        e instanceof ValidationError ? validationError(e) : e,
      )
      : exceptionRes;

    res.status(exception.getStatus()).json({ errors });
  }
}
