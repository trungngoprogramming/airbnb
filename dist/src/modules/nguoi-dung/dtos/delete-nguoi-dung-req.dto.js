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
exports.DeleteNguoiDungReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
class DeleteNguoiDungReqDto {
}
exports.DeleteNguoiDungReqDto = DeleteNguoiDungReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id number',
        example: 1,
        required: true,
    }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsNumber', 'Min'),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DeleteNguoiDungReqDto.prototype, "id", void 0);
//# sourceMappingURL=delete-nguoi-dung-req.dto.js.map