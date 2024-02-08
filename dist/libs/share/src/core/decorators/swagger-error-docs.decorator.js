"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorDocs = exports.ApiPropertyError = void 0;
const error_constant_1 = require("../constants/error.constant");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
function checkSpecialValidator(code) {
    if (code === 'isUUID')
        return 'isUuid';
    if (code === 'isJWT')
        return 'isJwt';
    return code;
}
function ApiPropertyError(...codes) {
    return function (target, propertyKey) {
        target = target instanceof Function ? target : target.constructor;
        const examples = codes.reduce((values, codeName) => {
            codeName = codeName.charAt(0).toLowerCase() + codeName.slice(1);
            codeName = checkSpecialValidator(codeName);
            const { code, message } = error_constant_1.Errors.Common[codeName];
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
exports.ApiPropertyError = ApiPropertyError;
function ApiErrorDocs(options) {
    const examples = {};
    const notFoundExamples = {};
    if (options.badRequestTarget) {
        options.badRequestTarget.forEach((targetObject) => {
            const errors = Reflect.getMetadata('badRequestStorage', targetObject);
            if (errors)
                Object.assign(examples, ...errors);
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
                                message: error_constant_1.Errors.Http[404],
                            },
                        ],
                    },
                },
                ...notFoundExamples,
            });
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
        badRequest: (0, swagger_1.ApiBadRequestResponse)({
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
        notFound: (0, swagger_1.ApiNotFoundResponse)({
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
        internalServer: (0, swagger_1.ApiInternalServerErrorResponse)({
            type: InternalServerErrorTypeDto,
            description: 'Error: Internal Server',
        }),
        unauthorized: (0, swagger_1.ApiUnauthorizedResponse)({
            type: UnauthorizedErrorTypeDto,
            description: 'Error: Unauthorized',
        }),
        forbidden: (0, swagger_1.ApiForbiddenResponse)({
            type: ForbiddenErrorTypeDto,
            description: 'Error: Forbidden',
        }),
    };
    if (options.exclude) {
        for (const key of options.exclude) {
            delete errorRes[key];
        }
    }
    return (0, common_1.applyDecorators)(...Object.values(errorRes));
}
exports.ApiErrorDocs = ApiErrorDocs;
class InternalServerErrorTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], InternalServerErrorTypeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: error_constant_1.Errors.Http[500] }),
    __metadata("design:type", String)
], InternalServerErrorTypeDto.prototype, "message", void 0);
class UnauthorizedErrorTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    __metadata("design:type", Number)
], UnauthorizedErrorTypeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: error_constant_1.Errors.Http[401] }),
    __metadata("design:type", String)
], UnauthorizedErrorTypeDto.prototype, "message", void 0);
class ForbiddenErrorTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 403 }),
    __metadata("design:type", Number)
], ForbiddenErrorTypeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: error_constant_1.Errors.Http[403] }),
    __metadata("design:type", String)
], ForbiddenErrorTypeDto.prototype, "message", void 0);
//# sourceMappingURL=swagger-error-docs.decorator.js.map