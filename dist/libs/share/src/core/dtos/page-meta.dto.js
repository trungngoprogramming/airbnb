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
exports.PageMetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class PageMetaDto {
}
exports.PageMetaDto = PageMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 10, example: 10 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 100, example: 100 }),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1, example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "currentPage", void 0);
//# sourceMappingURL=page-meta.dto.js.map