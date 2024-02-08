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
exports.ViTriController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const swagger_error_docs_decorator_1 = require("../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const create_vi_tri_res_dto_1 = require("./dtos/create-vi-tri-res.dto");
const create_vi_tri_req_dto_1 = require("./dtos/create-vi-tri-req.dto");
const vi_tri_service_1 = require("./vi-tri.service");
const jwt_auth_guard_1 = require("../../../libs/share/src/core/guards/jwt-auth.guard");
const list_vi_tri_res_dto_1 = require("./dtos/list-vi-tri-res.dto");
const list_vi_tri_req_dto_1 = require("./dtos/list-vi-tri-req.dto");
const detail_vi_tri_res_dto_1 = require("./dtos/detail-vi-tri-res.dto");
const detail_vi_tri_req_dto_1 = require("./dtos/detail-vi-tri-req.dto");
const update_vi_tri_res_dto_1 = require("./dtos/update-vi-tri-res.dto");
const update_vi_tri_req_dto_1 = require("./dtos/update-vi-tri-req.dto");
const delete_vi_tri_res_dto_1 = require("./dtos/delete-vi-tri-res.dto");
const delete_vi_tri_req_dto_1 = require("./dtos/delete-vi-tri-req.dto");
const role_guard_1 = require("../../../libs/share/src/core/guards/role.guard");
const platform_express_1 = require("@nestjs/platform-express");
const error_constant_1 = require("../../../libs/share/src/core/constants/error.constant");
const file_validation_pipe_1 = require("../../../libs/share/src/core/pipes/file-validation.pipe");
const upload_vi_tri_hinh_anh_res_dto_1 = require("./dtos/upload-vi-tri-hinh-anh-res.dto");
const upload_vi_tri_hinh_anh_req_dto_1 = require("./dtos/upload-vi-tri-hinh-anh-req.dto");
let ViTriController = class ViTriController {
    constructor(viTriService) {
        this.viTriService = viTriService;
    }
    async create(createViTriReqDto, hinhAnh) {
        createViTriReqDto.hinhAnh = hinhAnh;
        const viTri = await this.viTriService.create(createViTriReqDto);
        return (0, class_transformer_1.plainToInstance)(create_vi_tri_res_dto_1.CreateViTriResDto, viTri);
    }
    async list(params) {
        const result = await this.viTriService.list(params);
        return (0, class_transformer_1.plainToInstance)(list_vi_tri_res_dto_1.ListViTriResDto, result);
    }
    async detail(params) {
        const result = await this.viTriService.detail(params.id);
        return (0, class_transformer_1.plainToInstance)(detail_vi_tri_res_dto_1.DetailViTriResDto, result);
    }
    async update(params, updateViTriReqDto, hinhAnh) {
        updateViTriReqDto.hinhAnh = hinhAnh;
        const result = await this.viTriService.update(params.id, updateViTriReqDto);
        return (0, class_transformer_1.plainToInstance)(update_vi_tri_req_dto_1.UpdateViTriReqDto, result);
    }
    async uploadHinhAnh(params, uploadViTriHinhAnhResDto, hinhAnh) {
        uploadViTriHinhAnhResDto.hinhAnh = hinhAnh;
        const result = await this.viTriService.updateImg(params.id, uploadViTriHinhAnhResDto);
        return (0, class_transformer_1.plainToInstance)(upload_vi_tri_hinh_anh_res_dto_1.UploadViTriHinhAnhResDto, result);
    }
    async delete(params) {
        return await this.viTriService.delete(params.id);
    }
};
exports.ViTriController = ViTriController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API tạo vị trí',
        description: 'API tạo vị trí',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: create_vi_tri_res_dto_1.CreateViTriResDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh')),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound'],
        badRequestTarget: [create_vi_tri_req_dto_1.CreateViTriReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.imgMaxSize(5), error_constant_1.Errors.Common.imgNotType]
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(file_validation_pipe_1.ImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vi_tri_req_dto_1.CreateViTriReqDto, String]),
    __metadata("design:returntype", Promise)
], ViTriController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API danh sách vị trí',
        description: 'API danh sách vị trí',
    }),
    (0, swagger_1.ApiOkResponse)({ type: list_vi_tri_res_dto_1.ListViTriResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound', 'forbidden', 'unauthorized'],
        badRequestTarget: [list_vi_tri_req_dto_1.ListViTriReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_vi_tri_req_dto_1.ListViTriReqDto]),
    __metadata("design:returntype", Promise)
], ViTriController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'API chi tiết vị trí',
        description: 'API chi tiết vị trí',
    }),
    (0, swagger_1.ApiOkResponse)({ type: detail_vi_tri_res_dto_1.DetailViTriResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['forbidden', 'unauthorized'],
        notFoundTarget: ['ViTri'],
        badRequestTarget: [detail_vi_tri_req_dto_1.DetailViTriReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_vi_tri_req_dto_1.DetailViTriReqDto]),
    __metadata("design:returntype", Promise)
], ViTriController.prototype, "detail", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật vị trí',
        description: 'API cập nhật vị trí',
    }),
    (0, swagger_1.ApiOkResponse)({ type: update_vi_tri_res_dto_1.UpdateViTriResDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh')),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [detail_vi_tri_req_dto_1.DetailViTriReqDto, update_vi_tri_req_dto_1.UpdateViTriReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.imgMaxSize(5), error_constant_1.Errors.Common.imgNotType]
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(file_validation_pipe_1.ImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_vi_tri_req_dto_1.DetailViTriReqDto,
        update_vi_tri_req_dto_1.UpdateViTriReqDto, String]),
    __metadata("design:returntype", Promise)
], ViTriController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/upload-hinh-anh'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật vị trí hình ảnh',
        description: 'API cập nhật vị trí hình ảnh',
    }),
    (0, swagger_1.ApiOkResponse)({ type: upload_vi_tri_hinh_anh_res_dto_1.UploadViTriHinhAnhResDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh')),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [detail_vi_tri_req_dto_1.DetailViTriReqDto, upload_vi_tri_hinh_anh_req_dto_1.UploadViTriHinhAnhReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.imgMaxSize(5), error_constant_1.Errors.Common.imgNotType]
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(file_validation_pipe_1.ImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_vi_tri_req_dto_1.DetailViTriReqDto,
        upload_vi_tri_hinh_anh_req_dto_1.UploadViTriHinhAnhReqDto, String]),
    __metadata("design:returntype", Promise)
], ViTriController.prototype, "uploadHinhAnh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API xoá vị trí',
        description: 'API xoá vị trí',
    }),
    (0, swagger_1.ApiOkResponse)({ type: delete_vi_tri_res_dto_1.DeleteViTriResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [delete_vi_tri_req_dto_1.DeleteViTriReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_vi_tri_req_dto_1.DeleteViTriReqDto]),
    __metadata("design:returntype", Promise)
], ViTriController.prototype, "delete", null);
exports.ViTriController = ViTriController = __decorate([
    (0, swagger_1.ApiTags)('ViTri'),
    (0, common_1.Controller)('vi-tri'),
    __metadata("design:paramtypes", [vi_tri_service_1.ViTriService])
], ViTriController);
//# sourceMappingURL=vi-tri.controller.js.map