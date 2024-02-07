import { Prisma } from "@prisma/client";
import { Errors } from "../constants/error.constant";
import { ApiBadRequestResponse, ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiProperty, ApiServiceUnavailableResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { applyDecorators } from "@nestjs/common";

type ExcludeError =
  | 'notFound'
  | 'badRequest'
  | 'unauthorized'
  | 'forbidden'
  | 'internalServer'

type Options = {
  exclude?: ExcludeError[];
  notFoundTarget?: Prisma.ModelName[];
  badRequestTarget?: object[];
  badRequestFromService?: { code: string, message: string }[];
};

function checkSpecialValidator(code: string): string {
  if (code === 'isUUID') return 'isUuid';
  if (code === 'isJWT') return 'isJwt';

  return code;
}

export function ApiPropertyError(...codes: string[]) {
  return function(target: any, propertyKey?: string): void {
    target = target instanceof Function ? target : target.constructor;
    const examples = codes.reduce((values, codeName) => {
      codeName = codeName.charAt(0).toLowerCase() + codeName.slice(1);
      codeName = checkSpecialValidator(codeName);
      const { code, message } = Errors.Common[codeName];
      return {
        ...values,
        [`${code}: (${propertyKey}) ${message}`]: {
          value: {
            errors: [
              {
                resource: target.name,
                field: propertyKey,
                code,
                message,
              },
            ],
          },
        },
      };
    }, {});

    const metadataStorage = Reflect.getMetadata('badRequestStorage', target);
    const metaValues = [...(metadataStorage || []), examples];
    Reflect.defineMetadata('badRequestStorage', metaValues, target);
  };
}

export function ApiErrorDocs(options: Options) {
  const examples = {};
  const notFoundExamples = {};

  if (options.badRequestTarget) {
    options.badRequestTarget.forEach((targetObject) => {
      const errors = Reflect.getMetadata('badRequestStorage', targetObject);

      if (errors) Object.assign(examples, ...errors);
    });
  }

  if (options.badRequestFromService) {
    const errors = options.badRequestFromService.map((error) => {
      const { code, message } = error;

      return {
        [`${code}: ${message}`]: {
          value: {
            errors: [
              {
                code,
                message,
              },
            ],
          },
        },
      };
    });
    Object.assign(examples, ...errors);
  }

  if (options.notFoundTarget) {
    options.notFoundTarget.forEach((name) => {
      Object.assign(notFoundExamples, {
        [`${name} không tìm thấy`]: {
          value: {
            errors: [
              {
                resource: name,
                code: '404',
                message: Errors.Http[404],
              },
            ],
          },
        },
        ...notFoundExamples,
      })
    });
  }

  const properties = {
    errors: {
      type: 'array',
      items: {
        properties: {
          resource: {
            type: 'string',
          },
          code: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  };

  const errorRes = {
    badRequest: ApiBadRequestResponse({
      description: 'Error: Bad Request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties,
          },
          examples,
        },
      },
    }),
    notFound: ApiNotFoundResponse({
      description: 'Error: Not Found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties,
          },
          examples: { ...notFoundExamples },
        },
      },
    }),
    internalServer: ApiInternalServerErrorResponse({
      type: InternalServerErrorTypeDto,
      description: 'Error: Internal Server',
    }),
    unauthorized: ApiUnauthorizedResponse({
      type: UnauthorizedErrorTypeDto,
      description: 'Error: Unauthorized',
    }),
    forbidden: ApiForbiddenResponse({
      type: ForbiddenErrorTypeDto,
      description: 'Error: Forbidden',
    }),
  };

  if (options.exclude) {
    for (const key of options.exclude) {
      delete errorRes[key];
    }
  }

  return applyDecorators(...Object.values(errorRes));
}

class InternalServerErrorTypeDto {
  @ApiProperty({ example: 500 })
  code: number;

  @ApiProperty({ example: Errors.Http[500] })
  message: string;
}

class UnauthorizedErrorTypeDto {
  @ApiProperty({ example: 401 })
  code: number;

  @ApiProperty({ example: Errors.Http[401] })
  message: string;
}

class ForbiddenErrorTypeDto {
  @ApiProperty({ example: 403 })
  code: number;

  @ApiProperty({ example: Errors.Http[403] })
  message: string;
}
