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
exports.SignUpReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const auth_util_1 = require("../../../../libs/share/src/core/utils/auth.util");
class SignUpReqDto {
}
exports.SignUpReqDto = SignUpReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'name' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpReqDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'email@example.com' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpReqDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, auth_util_1.sha3512)(value)),
    __metadata("design:type", String)
], SignUpReqDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0354030301' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'MaxLength'),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpReqDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], SignUpReqDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'gender' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'MaxLength'),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpReqDto.prototype, "gender", void 0);
//# sourceMappingURL=sign-up-req.dto.js.map