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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const error_constant_1 = require("../../../libs/share/src/core/constants/error.constant");
const swagger_error_docs_decorator_1 = require("../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const sign_up_req_dto_1 = require("./dtos/sign-up-req.dto");
const auth_service_1 = require("./auth.service");
const sign_up_res_dto_1 = require("./dtos/sign-up-res.dto");
const class_transformer_1 = require("class-transformer");
const sign_in_res_dto_1 = require("./dtos/sign-in-res.dto");
const sign_in_req_dto_1 = require("./dtos/sign-in-req.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(signupReqDto) {
        const nguoiDung = await this.authService.signup(signupReqDto);
        return (0, class_transformer_1.plainToInstance)(sign_up_res_dto_1.SignUpResDto, nguoiDung);
    }
    async signin(signinReqDto) {
        const nguoiDung = await this.authService.signin(signinReqDto);
        return (0, class_transformer_1.plainToInstance)(sign_in_res_dto_1.SignInResDto, nguoiDung);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({
        summary: 'API đăng ký tài khoản',
        description: 'API đăng ký tài khoản',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: sign_up_res_dto_1.SignUpResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound', 'unauthorized', 'forbidden'],
        badRequestTarget: [sign_up_req_dto_1.SignUpReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.accountExisted],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_req_dto_1.SignUpReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, swagger_1.ApiOperation)({
        summary: 'API đăng nhập tài khoản',
        description: 'API đăng nhập tài khoản',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: sign_in_res_dto_1.SignInResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound', 'unauthorized', 'forbidden'],
        badRequestTarget: [sign_in_req_dto_1.SignInReqDto],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_req_dto_1.SignInReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map