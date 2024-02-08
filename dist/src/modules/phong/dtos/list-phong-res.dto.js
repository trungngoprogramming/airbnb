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
exports.ListPhongResDto = exports.PhongDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const page_meta_dto_1 = require("../../../../libs/share/src/core/dtos/page-meta.dto");
class PhongDto {
}
exports.PhongDto = PhongDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], PhongDto.prototype, "maViTri", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'V.I.P' }),
    __metadata("design:type", String)
], PhongDto.prototype, "tenPhong", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'V.I.P' }),
    __metadata("design:type", String)
], PhongDto.prototype, "moTa", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], PhongDto.prototype, "khach", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], PhongDto.prototype, "phongNgu", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], PhongDto.prototype, "giuong", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", String)
], PhongDto.prototype, "phongTam", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 100000 }),
    __metadata("design:type", String)
], PhongDto.prototype, "giaTien", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "mayGiat", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "banLa", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "tivi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "dieuHoa", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "wifi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "bep", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "doXe", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "hoBoi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PhongDto.prototype, "banUi", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'data:image/png;base64,60c663d2ccd0381873d8d09bfe8329b0' }),
    __metadata("design:type", String)
], PhongDto.prototype, "hinhAnh", void 0);
class ListPhongResDto {
}
exports.ListPhongResDto = ListPhongResDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        type: PhongDto,
        isArray: true
    }),
    __metadata("design:type", Array)
], ListPhongResDto.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: page_meta_dto_1.PageMetaDto }),
    __metadata("design:type", page_meta_dto_1.PageMetaDto)
], ListPhongResDto.prototype, "meta", void 0);
//# sourceMappingURL=list-phong-res.dto.js.map