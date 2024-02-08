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
exports.DatPhongController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dat_phong_service_1 = require("./dat-phong.service");
const jwt_auth_guard_1 = require("../../../libs/share/src/core/guards/jwt-auth.guard");
const swagger_error_docs_decorator_1 = require("../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const class_transformer_1 = require("class-transformer");
const create_dat_phong_req_dto_1 = require("./dtos/create-dat-phong-req.dto");
const create_dat_phong_res_dto_1 = require("./dtos/create-dat-phong-res.dto");
const list_dat_phong_res_dto_1 = require("./dtos/list-dat-phong-res.dto");
const list_dat_phong_req_dto_1 = require("./dtos/list-dat-phong-req.dto");
const detail_dat_phong_req_dto_1 = require("./dtos/detail-dat-phong-req.dto");
const detail_dat_phong_res_dto_1 = require("./dtos/detail-dat-phong-res.dto");
const update_dat_phong_res_dto_1 = require("./dtos/update-dat-phong-res.dto");
const update_dat_phong_req_dto_1 = require("./dtos/update-dat-phong-req.dto");
const role_guard_1 = require("../../../libs/share/src/core/guards/role.guard");
const delete_dat_phong_res_dto_1 = require("./dtos/delete-dat-phong-res.dto");
const delete_dat_phong_req_dto_1 = require("./dtos/delete-dat-phong-req.dto");
let DatPhongController = class DatPhongController {
    constructor(datPhongService) {
        this.datPhongService = datPhongService;
    }
    async create(createDatPhongReqDto) {
        const viTri = await this.datPhongService.create(createDatPhongReqDto);
        return (0, class_transformer_1.plainToInstance)(create_dat_phong_res_dto_1.CreateDatPhongResDto, viTri);
    }
    async list(params) {
        const result = await this.datPhongService.list(params);
        return (0, class_transformer_1.plainToInstance)(list_dat_phong_res_dto_1.ListDatPhongResDto, result);
    }
    async detail(params) {
        const result = await this.datPhongService.detail(params.id);
        return (0, class_transformer_1.plainToInstance)(detail_dat_phong_res_dto_1.DetailDatPhongResDto, result);
    }
    async update(params, updateDatPhongReqDto) {
        const result = await this.datPhongService.update(params.id, updateDatPhongReqDto);
        return (0, class_transformer_1.plainToInstance)(update_dat_phong_res_dto_1.UpdateDatPhongResDto, result);
    }
    async delete(params) {
        return await this.datPhongService.delete(params.id);
    }
};
exports.DatPhongController = DatPhongController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API đặt phòng',
        description: 'API đặt phòng',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: create_dat_phong_res_dto_1.CreateDatPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound'],
        badRequestTarget: [create_dat_phong_req_dto_1.CreateDatPhongReqDto],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dat_phong_req_dto_1.CreateDatPhongReqDto]),
    __metadata("design:returntype", Promise)
], DatPhongController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API danh sách đặt phòng',
        description: 'API danh sách đặt phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: list_dat_phong_res_dto_1.ListDatPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound'],
        badRequestTarget: [list_dat_phong_req_dto_1.ListDatPhongReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_dat_phong_req_dto_1.ListDatPhongReqDto]),
    __metadata("design:returntype", Promise)
], DatPhongController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API chi tiết đặt phòng',
        description: 'API chi tiết đặt phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: detail_dat_phong_res_dto_1.DetailDatPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['forbidden', 'unauthorized'],
        notFoundTarget: ['DatPhong'],
        badRequestTarget: [detail_dat_phong_req_dto_1.DetailDatPhongReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_dat_phong_req_dto_1.DetailDatPhongReqDto]),
    __metadata("design:returntype", Promise)
], DatPhongController.prototype, "detail", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật đặt phòng',
        description: 'API cập nhật đặt phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: update_dat_phong_res_dto_1.UpdateDatPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['DatPhong'],
        badRequestTarget: [detail_dat_phong_req_dto_1.DetailDatPhongReqDto, update_dat_phong_req_dto_1.UpdateDatPhongReqDto],
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_dat_phong_req_dto_1.DetailDatPhongReqDto,
        update_dat_phong_req_dto_1.UpdateDatPhongReqDto]),
    __metadata("design:returntype", Promise)
], DatPhongController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API xoá đặt phòng',
        description: 'API xoá đặt phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: delete_dat_phong_res_dto_1.DeleteDatPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [delete_dat_phong_req_dto_1.DeleteDatPhongReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_dat_phong_req_dto_1.DeleteDatPhongReqDto]),
    __metadata("design:returntype", Promise)
], DatPhongController.prototype, "delete", null);
exports.DatPhongController = DatPhongController = __decorate([
    (0, swagger_1.ApiTags)('DatPhong'),
    (0, common_1.Controller)('dat-phong'),
    __metadata("design:paramtypes", [dat_phong_service_1.DatPhongService])
], DatPhongController);
//# sourceMappingURL=dat-phong.controller.js.map