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
exports.NguoiDungService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const error_constant_1 = require("../../../libs/share/src/core/constants/error.constant");
const paginate_util_1 = require("../../../libs/share/src/core/utils/paginate.util");
let NguoiDungService = class NguoiDungService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createNguoiDungReqDto) {
        const user = await this.prisma.nguoiDung.findFirst({ where: { email: createNguoiDungReqDto.email } });
        if (user)
            throw new common_1.BadRequestException(error_constant_1.Errors.Common.accountExisted);
        return await this.prisma.nguoiDung.create({ data: createNguoiDungReqDto });
    }
    async list({ take, page, keyword }) {
        const args = {};
        if (keyword)
            args.where = {
                OR: [
                    { name: { contains: keyword } },
                    { email: { contains: keyword } },
                    { phone: { contains: keyword } }
                ]
            };
        return await (0, paginate_util_1.paginate)(this.prisma.nguoiDung, args, page, take);
    }
    async detail(id) {
        return await this.prisma.nguoiDung.findFirstOrThrow({ where: { id } });
    }
    async update(id, updateNguoiDungReqDto) {
        await this.detail(id);
        return await this.prisma.nguoiDung.update({ where: { id }, data: updateNguoiDungReqDto });
    }
    async delete(id) {
        await this.detail(id);
        await this.prisma.nguoiDung.delete({ where: { id } });
        return { id };
    }
    async updateImg(id, uploadViTriHinhAnhResDto) {
        await this.detail(id);
        return await this.prisma.nguoiDung.update({ where: { id }, data: uploadViTriHinhAnhResDto });
    }
};
exports.NguoiDungService = NguoiDungService;
exports.NguoiDungService = NguoiDungService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NguoiDungService);
//# sourceMappingURL=nguoi-dung.service.js.map