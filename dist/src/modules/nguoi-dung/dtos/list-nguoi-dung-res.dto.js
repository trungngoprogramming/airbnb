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
exports.ListNguoiDungResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const page_meta_dto_1 = require("../../../../libs/share/src/core/dtos/page-meta.dto");
class NguoiDungDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], NguoiDungDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'example@email.com' }),
    __metadata("design:type", Number)
], NguoiDungDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'password' }),
    __metadata("design:type", String)
], NguoiDungDto.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: '0354030301' }),
    __metadata("design:type", String)
], NguoiDungDto.prototype, "phone", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    __metadata("design:type", String)
], NguoiDungDto.prototype, "birthday", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'Male' }),
    __metadata("design:type", String)
], NguoiDungDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'editor' }),
    __metadata("design:type", String)
], NguoiDungDto.prototype, "role", void 0);
class ListNguoiDungResDto {
}
exports.ListNguoiDungResDto = ListNguoiDungResDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        type: NguoiDungDto,
        isArray: true
    }),
    __metadata("design:type", Array)
], ListNguoiDungResDto.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: page_meta_dto_1.PageMetaDto }),
    __metadata("design:type", page_meta_dto_1.PageMetaDto)
], ListNguoiDungResDto.prototype, "meta", void 0);
//# sourceMappingURL=list-nguoi-dung-res.dto.js.map