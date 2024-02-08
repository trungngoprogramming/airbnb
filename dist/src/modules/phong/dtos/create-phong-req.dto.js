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
exports.CreatePhongReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
class CreatePhongReqDto {
}
exports.CreatePhongReqDto = CreatePhongReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreatePhongReqDto.prototype, "maViTri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'V.I.P' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePhongReqDto.prototype, "tenPhong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'V.I.P' }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePhongReqDto.prototype, "mota", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreatePhongReqDto.prototype, "khach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreatePhongReqDto.prototype, "phongNgu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreatePhongReqDto.prototype, "giuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreatePhongReqDto.prototype, "phongTam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100000 }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreatePhongReqDto.prototype, "giaTien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "mayGiat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "banLa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "tivi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "dieuHoa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "wifi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "bep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "doXe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "hoBoi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNotEmpty', 'IsBoolean'),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], CreatePhongReqDto.prototype, "banUi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], CreatePhongReqDto.prototype, "hinhAnh", void 0);
//# sourceMappingURL=create-phong-req.dto.js.map