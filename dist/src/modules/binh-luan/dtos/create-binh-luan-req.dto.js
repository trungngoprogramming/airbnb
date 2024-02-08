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
exports.CreateBinhLuanReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
class CreateBinhLuanReqDto {
}
exports.CreateBinhLuanReqDto = CreateBinhLuanReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBinhLuanReqDto.prototype, "maPhong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBinhLuanReqDto.prototype, "maNguoiBinhLuan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'Max'),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBinhLuanReqDto.prototype, "saoBinhLuan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Xanh, Sạch, Đẹp' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBinhLuanReqDto.prototype, "noiDung", void 0);
//# sourceMappingURL=create-binh-luan-req.dto.js.map