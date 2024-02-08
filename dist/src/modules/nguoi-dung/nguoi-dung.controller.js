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
exports.NguoiDungController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nguoi_dung_service_1 = require("./nguoi-dung.service");
const jwt_auth_guard_1 = require("../../../libs/share/src/core/guards/jwt-auth.guard");
const role_guard_1 = require("../../../libs/share/src/core/guards/role.guard");
const swagger_error_docs_decorator_1 = require("../../../libs/share/src/core/decorators/swagger-error-docs.decorator");
const create_nguoi_dung_req_dto_1 = require("./dtos/create-nguoi-dung-req.dto");
const create_nguoi_dung_res_dto_1 = require("./dtos/create-nguoi-dung-res.dto");
const class_transformer_1 = require("class-transformer");
const error_constant_1 = require("../../../libs/share/src/core/constants/error.constant");
const list_nguoi_dung_res_dto_1 = require("./dtos/list-nguoi-dung-res.dto");
const list_nguoi_dung_req_dto_1 = require("./dtos/list-nguoi-dung-req.dto");
const detail_nguoi_dung_res_dto_1 = require("./dtos/detail-nguoi-dung-res.dto");
const detail_nguoi_dung_req_dto_1 = require("./dtos/detail-nguoi-dung-req.dto");
const update_nguoi_dung_res_dto_1 = require("./dtos/update-nguoi-dung-res.dto");
const update_nguoi_dung_req_dto_1 = require("./dtos/update-nguoi-dung-req.dto");
const delete_nguoi_dung_res_dto_1 = require("./dtos/delete-nguoi-dung-res.dto");
const delete_nguoi_dung_req_dto_1 = require("./dtos/delete-nguoi-dung-req.dto");
const platform_express_1 = require("@nestjs/platform-express");
const file_validation_pipe_1 = require("../../../libs/share/src/core/pipes/file-validation.pipe");
const upload_hinh_anh_nguoi_dung_res_dto_1 = require("./dtos/upload-hinh-anh-nguoi-dung-res.dto");
const upload_hinh_anh_nguoi_dung_req_dto_1 = require("./dtos/upload-hinh-anh-nguoi-dung-req.dto");
let NguoiDungController = class NguoiDungController {
    constructor(nguoiDungService) {
        this.nguoiDungService = nguoiDungService;
    }
    async create(createNguoiDungReqDto) {
        const nguoiDung = await this.nguoiDungService.create(createNguoiDungReqDto);
        return (0, class_transformer_1.plainToInstance)(create_nguoi_dung_res_dto_1.CreateNguoiDungResDto, nguoiDung);
    }
    async list(params) {
        const result = await this.nguoiDungService.list(params);
        return (0, class_transformer_1.plainToInstance)(list_nguoi_dung_res_dto_1.ListNguoiDungResDto, result);
    }
    async detail(params) {
        const result = await this.nguoiDungService.detail(params.id);
        return (0, class_transformer_1.plainToInstance)(detail_nguoi_dung_res_dto_1.DetailNguoiDungResDto, result);
    }
    async update(params, updateNguoiDungReqDto) {
        const result = await this.nguoiDungService.update(params.id, updateNguoiDungReqDto);
        return (0, class_transformer_1.plainToInstance)(update_nguoi_dung_res_dto_1.UpdateNguoiDungResDto, result);
    }
    async uploadHinhAnh(params, uploadViTriHinhAnhResDto, hinhAnh) {
        uploadViTriHinhAnhResDto.hinhAnh = hinhAnh;
        const result = await this.nguoiDungService.updateImg(params.id, uploadViTriHinhAnhResDto);
        return (0, class_transformer_1.plainToInstance)(upload_hinh_anh_nguoi_dung_res_dto_1.UploadHinhAnhNguoiDungResDto, result);
    }
    async delete(params) {
        return await this.nguoiDungService.delete(params.id);
    }
};
exports.NguoiDungController = NguoiDungController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API tạo người dùng',
        description: 'API tạo người dùng',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: create_nguoi_dung_res_dto_1.CreateNguoiDungResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound'],
        badRequestTarget: [create_nguoi_dung_req_dto_1.CreateNguoiDungReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.accountExisted],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nguoi_dung_req_dto_1.CreateNguoiDungReqDto]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API danh sách người dùng',
        description: 'API danh sách người dùng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: list_nguoi_dung_res_dto_1.ListNguoiDungResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['notFound', 'forbidden', 'unauthorized'],
        badRequestTarget: [list_nguoi_dung_req_dto_1.ListNguoiDungReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_nguoi_dung_req_dto_1.ListNguoiDungReqDto]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'API chi tiết người dùng',
        description: 'API chi tiết người dùng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: detail_nguoi_dung_res_dto_1.DetailNguoiDungResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        exclude: ['forbidden', 'unauthorized'],
        notFoundTarget: ['NguoiDung'],
        badRequestTarget: [detail_nguoi_dung_req_dto_1.DetailNguoiDungReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_nguoi_dung_req_dto_1.DetailNguoiDungReqDto]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "detail", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật người dùng',
        description: 'API cập nhật người dùng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: update_nguoi_dung_res_dto_1.UpdateNguoiDungResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['NguoiDung'],
        badRequestTarget: [detail_nguoi_dung_req_dto_1.DetailNguoiDungReqDto, update_nguoi_dung_req_dto_1.UpdateNguoiDungReqDto],
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_nguoi_dung_req_dto_1.DetailNguoiDungReqDto,
        update_nguoi_dung_req_dto_1.UpdateNguoiDungReqDto]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/upload-hinh-anh'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API cập nhật hình ảnh người dùng',
        description: 'API cập nhật hình ảnh người dùng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: upload_hinh_anh_nguoi_dung_res_dto_1.UploadHinhAnhNguoiDungResDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh')),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['NguoiDung'],
        badRequestTarget: [detail_nguoi_dung_req_dto_1.DetailNguoiDungReqDto, upload_hinh_anh_nguoi_dung_req_dto_1.UploadHinhAnhNguoiDungReqDto],
        badRequestFromService: [error_constant_1.Errors.Common.imgMaxSize(5), error_constant_1.Errors.Common.imgNotType]
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(file_validation_pipe_1.ImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_nguoi_dung_req_dto_1.DetailNguoiDungReqDto,
        upload_hinh_anh_nguoi_dung_req_dto_1.UploadHinhAnhNguoiDungReqDto, String]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "uploadHinhAnh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'API xoá người dùng',
        description: 'API xoá người dùng',
    }),
    (0, swagger_1.ApiOkResponse)({ type: delete_nguoi_dung_res_dto_1.DeleteNguoiDungResDto }),
    (0, swagger_error_docs_decorator_1.ApiErrorDocs)({
        notFoundTarget: ['NguoiDung'],
        badRequestTarget: [delete_nguoi_dung_req_dto_1.DeleteNguoiDungReqDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_nguoi_dung_req_dto_1.DeleteNguoiDungReqDto]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "delete", null);
exports.NguoiDungController = NguoiDungController = __decorate([
    (0, swagger_1.ApiTags)('NguoiDung'),
    (0, common_1.Controller)('nguoi-dung'),
    __metadata("design:paramtypes", [nguoi_dung_service_1.NguoiDungService])
], NguoiDungController);
//# sourceMappingURL=nguoi-dung.controller.js.map