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
exports.PageReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_error_docs_decorator_1 = require("../decorators/swagger-error-docs.decorator");
class PageReqDto {
}
exports.PageReqDto = PageReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page number',
        example: 1,
        required: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNumber', 'Max', 'Min'),
    (0, class_validator_1.Max)(Number.MAX_SAFE_INTEGER),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PageReqDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number record in one page',
        example: 10,
        required: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, swagger_error_docs_decorator_1.ApiPropertyError)('IsNumber', 'Max', 'Min'),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PageReqDto.prototype, "take", void 0);
//# sourceMappingURL=page-req.dto.js.map