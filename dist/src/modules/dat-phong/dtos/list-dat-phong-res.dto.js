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
exports.ListDatPhongResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const page_meta_dto_1 = require("../../../../libs/share/src/core/dtos/page-meta.dto");
class DatPhongDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], DatPhongDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], DatPhongDto.prototype, "maPhong", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], DatPhongDto.prototype, "maNguoiDat", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], DatPhongDto.prototype, "soLuongKhach", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    __metadata("design:type", String)
], DatPhongDto.prototype, "ngayDen", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    __metadata("design:type", String)
], DatPhongDto.prototype, "ngayDi", void 0);
class ListDatPhongResDto {
}
exports.ListDatPhongResDto = ListDatPhongResDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        type: DatPhongDto,
        isArray: true
    }),
    __metadata("design:type", Array)
], ListDatPhongResDto.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: page_meta_dto_1.PageMetaDto }),
    __metadata("design:type", page_meta_dto_1.PageMetaDto)
], ListDatPhongResDto.prototype, "meta", void 0);
//# sourceMappingURL=list-dat-phong-res.dto.js.map