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
exports.ViTriService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const paginate_util_1 = require("../../../libs/share/src/core/utils/paginate.util");
let ViTriService = class ViTriService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createViTriReqDto) {
        return await this.prisma.viTri.create({
            data: createViTriReqDto
        });
    }
    async list({ take, page, keyword }) {
        const args = {};
        if (keyword)
            args.where = {
                OR: [
                    { tenViTri: { contains: keyword } },
                    { tinhThanh: { contains: keyword } },
                    { quocGia: { contains: keyword } }
                ]
            };
        return await (0, paginate_util_1.paginate)(this.prisma.viTri, args, page, take);
    }
    async detail(id) {
        return await this.prisma.viTri.findFirstOrThrow({ where: { id } });
    }
    async update(id, updateViTriReqDto) {
        await this.detail(id);
        return await this.prisma.viTri.update({ where: { id }, data: updateViTriReqDto });
    }
    async updateImg(id, uploadViTriHinhAnhResDto) {
        await this.detail(id);
        return await this.prisma.viTri.update({ where: { id }, data: uploadViTriHinhAnhResDto });
    }
    async delete(id) {
        await this.detail(id);
        await this.prisma.viTri.delete({ where: { id } });
        return { id };
    }
};
exports.ViTriService = ViTriService;
exports.ViTriService = ViTriService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ViTriService);
//# sourceMappingURL=vi-tri.service.js.map