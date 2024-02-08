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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinhLuanController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_error_docs_decorator_1 = require("../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const binh_luan_service_1 = require("./binh-luan.service");
const class_transformer_1 = require("class-transformer");
const jwt_auth_guard_1 = require("../../../libs/share/src/core/guards/jwt-auth.guard");
const create_binh_luan_req_dto_1 = require("./dtos/create-binh-luan-req.dto");
const create_binh_luan_res_dto_1 = require("./dtos/create-binh-luan-res.dto");
const list_binh_luan_res_dto_1 = require("./dtos/list-binh-luan-res.dto");
const list_binh_luan_req_dto_1 = require("./dtos/list-binh-luan-req.dto");
const update_binh_luan_res_dto_1 = require("./dtos/update-binh-luan-res.dto");
const update_binh_luan_req_dto_1 = require("./dtos/update-binh-luan-req.dto");
const delete_nguoi_dung_res_dto_1 = require("./dtos/delete-nguoi-dung-res.dto");
const delete_nguoi_dung_req_dto_1 = require("./dtos/delete-nguoi-dung-req.dto");
let BinhLuanController = class BinhLuanController {
    constructor(binhLuanService) {
        this.binhLuanService = binhLuanService;
    }
    async create(createBinhLuanReqDto) {
        const result = await this.binhLuanService.create(createBinhLuanReqDto);
        return (0, class_transformer_1.plainToInstance)(create_binh_luan_res_dto_1.CreateBinhLuanResDto, result);
    }
    async list(params) {
        const result = await this.binhLuanService.list(params);
        return (0, class_transformer_1.plainToInstance)(list_binh_luan_res_dto_1.ListBinhLuanResDto, result);
    }
    async update(params, updateBinhLuanReqDto) {
        const result = await this.binhLuanService.update(params.id, updateBinhLuanReqDto);
        return (0, class_transformer_1.plainToInstance)(update_binh_luan_res_dto_1.UpdateBinhLuanResDto, result);
    }
    async delete(params) {
        return await this.binhLuanService.delete(params.id);
    }
};
exports.BinhLuanController = BinhLuanController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API tạo bình luận',
        description: 'API tạo bình luận',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: create_binh_luan_res_dto_1.CreateBinhLuanResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound'],
        badRequestTarget: [create_binh_luan_req_dto_1.CreateBinhLuanReqDto],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_binh_luan_req_dto_1.CreateBinhLuanReqDto]),
    __metadata("design:returntype", Promise)
], BinhLuanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API danh sách bình luận',
        description: 'API danh sách vị trí',
    }),
    (0, swagger_1.ApiOkResponse)({ type: list_binh_luan_res_dto_1.ListBinhLuanResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound', 'forbidden', 'unauthorized'],
        badRequestTarget: [list_binh_luan_req_dto_1.ListBinhLuanReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_binh_luan_req_dto_1.ListBinhLuanReqDto]),
    __metadata("design:returntype", Promise)
], BinhLuanController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật bình luận',
        description: 'API cập nhật bình luận',
    }),
    (0, swagger_1.ApiOkResponse)({ type: update_binh_luan_res_dto_1.UpdateBinhLuanResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [update_binh_luan_req_dto_1.IdBinhLuanReqDto, update_binh_luan_req_dto_1.UpdateBinhLuanReqDto],
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_binh_luan_req_dto_1.IdBinhLuanReqDto,
        update_binh_luan_req_dto_1.UpdateBinhLuanReqDto]),
    __metadata("design:returntype", Promise)
], BinhLuanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API xoá bình luận',
        description: 'API xoá bình luận',
    }),
    (0, swagger_1.ApiOkResponse)({ type: delete_nguoi_dung_res_dto_1.DeleteBinhLuanResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [delete_nguoi_dung_req_dto_1.DeleteBinhLuanReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_nguoi_dung_req_dto_1.DeleteBinhLuanReqDto]),
    __metadata("design:returntype", Promise)
], BinhLuanController.prototype, "delete", null);
exports.BinhLuanController = BinhLuanController = __decorate([
    (0, swagger_1.ApiTags)('BinhLuan'),
    (0, common_1.Controller)('binh-luan'),
    __metadata("design:paramtypes", [binh_luan_service_1.BinhLuanService])
], BinhLuanController);
//# sourceMappingURL=binh-luan.controller.js.map