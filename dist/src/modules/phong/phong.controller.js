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
exports.PhongController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const phong_service_1 = require("./phong.service");
const role_guard_1 = require("../../../libs/share/src/core/guards/role.guard");
const jwt_auth_guard_1 = require("../../../libs/share/src/core/guards/jwt-auth.guard");
const swagger_error_docs_decorator_1 = require("../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const error_constant_1 = require("../../../libs/share/src/core/constants/error.constant");
const file_validation_pipe_1 = require("../../../libs/share/src/core/pipes/file-validation.pipe");
const create_phong_res_dto_1 = require("./dtos/create-phong-res.dto");
const create_phong_req_dto_1 = require("./dtos/create-phong-req.dto");
const class_transformer_1 = require("class-transformer");
const list_phong_req_dto_1 = require("./dtos/list-phong-req.dto");
const list_phong_res_dto_1 = require("./dtos/list-phong-res.dto");
const detail_phong_res_dto_1 = require("./dtos/detail-phong-res.dto");
const detail_phong_req_dto_1 = require("./dtos/detail-phong-req.dto");
const delete_phong_req_dto_1 = require("./dtos/delete-phong-req.dto");
const delete_phong_res_dto_1 = require("./dtos/delete-phong-res.dto");
const upload_hinh_anh_phong_req_dto_1 = require("./dtos/upload-hinh-anh-phong-req.dto");
const upload_hinh_anh_phong_res_dto_1 = require("./dtos/upload-hinh-anh-phong-res.dto");
let PhongController = class PhongController {
    constructor(phongService) {
        this.phongService = phongService;
    }
    async create(createPhongReqDto, hinhAnh) {
        createPhongReqDto.hinhAnh = hinhAnh;
        const viTri = await this.phongService.create(createPhongReqDto);
        return (0, class_transformer_1.plainToInstance)(create_phong_res_dto_1.CreatePhongResDto, viTri);
    }
    async list(params) {
        const listViTri = await this.phongService.list(params);
        return (0, class_transformer_1.plainToInstance)(list_phong_res_dto_1.ListPhongResDto, listViTri);
    }
    async detail(params) {
        const phong = await this.phongService.detail(params.id);
        return (0, class_transformer_1.plainToInstance)(detail_phong_res_dto_1.DetailPhongResDto, phong);
    }
    async uploadHinhAnh(params, uploadHinhAnhPhongReqDto, hinhAnh) {
        uploadHinhAnhPhongReqDto.hinhAnh = hinhAnh;
        const result = await this.phongService.updateImg(params.id, uploadHinhAnhPhongReqDto);
        return (0, class_transformer_1.plainToInstance)(upload_hinh_anh_phong_res_dto_1.UploadHinhAnhPhongResDto, result);
    }
    async delete(params) {
        return await this.phongService.delete(params.id);
    }
};
exports.PhongController = PhongController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API tạo vị trí',
        description: 'API tạo vị trí',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: create_phong_res_dto_1.CreatePhongResDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh')),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound'],
        badRequestTarget: [create_phong_req_dto_1.CreatePhongReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.imgMaxSize(5), error_constant_1.Errors.Common.imgNotType]
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(file_validation_pipe_1.ImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phong_req_dto_1.CreatePhongReqDto, String]),
    __metadata("design:returntype", Promise)
], PhongController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API danh sách phòng',
        description: 'API danh sách phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: list_phong_res_dto_1.ListPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound', 'forbidden', 'unauthorized'],
        badRequestTarget: [list_phong_req_dto_1.ListPhongReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_phong_req_dto_1.ListPhongReqDto]),
    __metadata("design:returntype", Promise)
], PhongController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'API chi tiết phòng',
        description: 'API chi tiết phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: detail_phong_res_dto_1.DetailPhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['forbidden', 'unauthorized'],
        notFoundTarget: ['Phong'],
        badRequestTarget: [detail_phong_req_dto_1.DetailPhongReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_phong_req_dto_1.DetailPhongReqDto]),
    __metadata("design:returntype", Promise)
], PhongController.prototype, "detail", null);
__decorate([
    (0, common_1.Put)(':id/upload-hinh-anh'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật hình ảnh phòng',
        description: 'API cập nhật hình ảnh phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: upload_hinh_anh_phong_res_dto_1.UploadHinhAnhPhongResDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh')),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['Phong'],
        badRequestTarget: [detail_phong_req_dto_1.DetailPhongReqDto, upload_hinh_anh_phong_req_dto_1.UploadHinhAnhPhongReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.imgMaxSize(5), error_constant_1.Errors.Common.imgNotType]
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(file_validation_pipe_1.ImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_phong_req_dto_1.DetailPhongReqDto,
        upload_hinh_anh_phong_req_dto_1.UploadHinhAnhPhongReqDto, String]),
    __metadata("design:returntype", Promise)
], PhongController.prototype, "uploadHinhAnh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API xoá phòng',
        description: 'API xoá phòng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: delete_phong_res_dto_1.DeletePhongResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['ViTri'],
        badRequestTarget: [delete_phong_req_dto_1.DeletePhongReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_phong_req_dto_1.DeletePhongReqDto]),
    __metadata("design:returntype", Promise)
], PhongController.prototype, "delete", null);
exports.PhongController = PhongController = __decorate([
    (0, swagger_1.ApiTags)('Phong'),
    (0, common_1.Controller)('phong'),
    __metadata("design:paramtypes", [phong_service_1.PhongService])
], PhongController);
//# sourceMappingURL=phong.controller.js.map