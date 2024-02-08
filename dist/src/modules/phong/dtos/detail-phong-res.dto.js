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
exports.DetailPhongResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class DetailPhongResDto {
}
exports.DetailPhongResDto = DetailPhongResDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], DetailPhongResDto.prototype, "maViTri", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'V.I.P' }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "tenPhong", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'V.I.P' }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "moTa", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "khach", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "phongNgu", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "giuong", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "phongTam", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 100000 }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "giaTien", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "mayGiat", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "banLa", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "tivi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "dieuHoa", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "wifi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "bep", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "doXe", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "hoBoi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DetailPhongResDto.prototype, "banUi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'data:image/png;base64,60c663d2ccd0381873d8d09bfe8329b0' }),
    __metadata("design:type", String)
], DetailPhongResDto.prototype, "hinhAnh", void 0);
//# sourceMappingURL=detail-phong-res.dto.js.map