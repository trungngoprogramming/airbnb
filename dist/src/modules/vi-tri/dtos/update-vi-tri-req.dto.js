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
exports.UpdateViTriReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
class UpdateViTriReqDto {
}
exports.UpdateViTriReqDto = UpdateViTriReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tôn Đản' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateViTriReqDto.prototype, "tenViTri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Đà Nẵng' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateViTriReqDto.prototype, "tinhThanh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Việt Nam' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateViTriReqDto.prototype, "quocGia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], UpdateViTriReqDto.prototype, "hinhAnh", void 0);
//# sourceMappingURL=update-vi-tri-req.dto.js.map