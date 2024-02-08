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
exports.CreateDatPhongReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const auth_util_1 = require("../../../../libs/share/src/core/utils/auth.util");
class CreateDatPhongReqDto {
}
exports.CreateDatPhongReqDto = CreateDatPhongReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateDatPhongReqDto.prototype, "maPhong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '//kiểu số, bắt buộc phải truyền nếu là admin, tự động ghi đè nếu là user, nên chỉ cần truyền null' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, auth_util_1.getCurrentUser)().role === 'admin' ? value : (0, auth_util_1.getCurrentUser)().id),
    __metadata("design:type", Number)
], CreateDatPhongReqDto.prototype, "maNguoiDat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'Max'),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateDatPhongReqDto.prototype, "soLuongKhach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", String)
], CreateDatPhongReqDto.prototype, "ngayDen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", String)
], CreateDatPhongReqDto.prototype, "ngayDi", void 0);
//# sourceMappingURL=create-dat-phong-req.dto.js.map