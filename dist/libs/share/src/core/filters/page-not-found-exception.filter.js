"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFoundExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_constant_1 = require("../constants/error.constant");
let PageNotFoundExceptionFilter = class PageNotFoundExceptionFilter {
    catch(exception, host) {
        const res = host.switchToHttp().getResponse();
        const status = exception.getStatus();
        res.status(status).json({
            code: common_1.HttpStatus.NOT_FOUND,
            message: error_constant_1.Errors.Http[404],
        });
    }
};
exports.PageNotFoundExceptionFilter = PageNotFoundExceptionFilter;
exports.PageNotFoundExceptionFilter = PageNotFoundExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.NotFoundException)
], PageNotFoundExceptionFilter);
//# sourceMappingURL=page-not-found-exception.filter.js.map