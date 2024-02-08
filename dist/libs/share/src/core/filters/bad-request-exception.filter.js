"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const error_constant_1 = require("../constants/error.constant");
const validationError = (error) => {
    let errorObject;
    if ((0, lodash_1.isEmpty)(error.children)) {
        errorObject = error;
    }
    else {
        errorObject = (0, lodash_1.first)(error.children);
        while (!(0, lodash_1.isEmpty)(errorObject.children)) {
            errorObject = (0, lodash_1.first)(errorObject.children);
        }
    }
    const field = errorObject.property;
    const errName = (0, lodash_1.first)(Object.keys(errorObject.constraints));
    let code = error_constant_1.Errors.Common[errName]?.code;
    const errMsg = (0, lodash_1.first)(Object.values(errorObject.constraints));
    const regexValueNumber = errMsg.match(/\d+/);
    const regexValueIn = errMsg.slice(errMsg.indexOf(":") + 1);
    let message = code
        ? error_constant_1.Errors.Common[errName].message
        : undefined;
    message = (0, lodash_1.replace)(message, /{valueNumber}/, regexValueNumber && regexValueNumber[0]);
    message = (0, lodash_1.replace)(message, /{valueIn}/, regexValueIn);
    return {
        resource: error.target?.constructor.name,
        field,
        code,
        message,
    };
};
let BadRequestExceptionFilter = class BadRequestExceptionFilter {
    catch(exception, host) {
        const exceptionRes = exception.getResponse();
        const messages = exceptionRes.message;
        const res = host.switchToHttp().getResponse();
        const errors = (0, class_validator_1.isArray)(messages)
            ? messages.map((e) => e instanceof class_validator_1.ValidationError ? validationError(e) : e)
            : exceptionRes;
        res.status(exception.getStatus()).json({ errors });
    }
};
exports.BadRequestExceptionFilter = BadRequestExceptionFilter;
exports.BadRequestExceptionFilter = BadRequestExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.BadRequestException)
], BadRequestExceptionFilter);
//# sourceMappingURL=bad-request-exception.filter.js.map