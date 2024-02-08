"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_constant_1 = require("../constants/error.constant");
let InternalServerExceptionFilter = class InternalServerExceptionFilter {
    catch(_exception, host) {
        const res = host.switchToHttp().getResponse();
        const status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        res.status(status).json({
            code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: error_constant_1.Errors.Http[500],
        });
    }
};
exports.InternalServerExceptionFilter = InternalServerExceptionFilter;
exports.InternalServerExceptionFilter = InternalServerExceptionFilter = __decorate([
    (0, common_1.Catch)()
], InternalServerExceptionFilter);
//# sourceMappingURL=internal-server-exception.filter.js.map