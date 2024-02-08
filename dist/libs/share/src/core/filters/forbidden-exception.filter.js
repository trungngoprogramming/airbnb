"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_constant_1 = require("../constants/error.constant");
let ForbiddenExceptionFilter = class ForbiddenExceptionFilter {
    catch(exception, host) {
        const res = host.switchToHttp().getResponse();
        const status = exception.getStatus();
        res.status(status).json({
            code: common_1.HttpStatus.FORBIDDEN,
            message: error_constant_1.Errors.Http[403],
        });
    }
};
exports.ForbiddenExceptionFilter = ForbiddenExceptionFilter;
exports.ForbiddenExceptionFilter = ForbiddenExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.ForbiddenException)
], ForbiddenExceptionFilter);
//# sourceMappingURL=forbidden-exception.filter.js.map