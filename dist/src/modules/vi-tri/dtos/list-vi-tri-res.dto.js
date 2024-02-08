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
exports.ListViTriResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const page_meta_dto_1 = require("../../../../libs/share/src/core/dtos/page-meta.dto");
class ViTriDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'Tôn Đản' }),
    __metadata("design:type", String)
], ViTriDto.prototype, "tenViTri", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'Đà Nẵng' }),
    __metadata("design:type", String)
], ViTriDto.prototype, "tinhThanh", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'Việt Nam' }),
    __metadata("design:type", String)
], ViTriDto.prototype, "quocGia", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'data:image/png;base64,60c663d2ccd0381873d8d09bfe8329b0' }),
    __metadata("design:type", String)
], ViTriDto.prototype, "hinhAnh", void 0);
class ListViTriResDto {
}
exports.ListViTriResDto = ListViTriResDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        type: ViTriDto,
        isArray: true
    }),
    __metadata("design:type", Array)
], ListViTriResDto.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: page_meta_dto_1.PageMetaDto }),
    __metadata("design:type", page_meta_dto_1.PageMetaDto)
], ListViTriResDto.prototype, "meta", void 0);
//# sourceMappingURL=list-vi-tri-res.dto.js.map