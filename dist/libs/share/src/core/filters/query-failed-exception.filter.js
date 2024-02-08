"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFailedErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const error_constant_1 = require("../constants/error.constant");
let QueryFailedErrorFilter = class QueryFailedErrorFilter {
    async catch(error, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const message = error.message.trim().split('\n').pop();
        let errors;
        let status;
        if (error.code === 'P2025') {
            status = common_1.HttpStatus.NOT_FOUND;
            errors = [
                {
                    code: '404',
                    resource: message.split(' ')[1],
                    message: error_constant_1.Errors.Http[404],
                },
            ];
        }
        else {
            status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            errors = {
                code: '500',
                message: error_constant_1.Errors.Http[500],
            };
        }
        res.status(status).json({ errors });
    }
};
exports.QueryFailedErrorFilter = QueryFailedErrorFilter;
exports.QueryFailedErrorFilter = QueryFailedErrorFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], QueryFailedErrorFilter);
//# sourceMappingURL=query-failed-exception.filter.js.map