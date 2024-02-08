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
exports.PhongService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const paginate_util_1 = require("../../../libs/share/src/core/utils/paginate.util");
const lodash_1 = require("lodash");
let PhongService = class PhongService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPhongReqDto) {
        await this.prisma.viTri.findFirstOrThrow({ where: { id: createPhongReqDto.maViTri } });
        return await this.prisma.phong.create({
            data: createPhongReqDto
        });
    }
    async list({ take, page, keyword }) {
        const args = {};
        if (keyword)
            args.where = {
                OR: [
                    { tenPhong: { contains: keyword } },
                    { mota: { contains: keyword } },
                ]
            };
        if (!isNaN(Number(keyword))) {
            args.where['OR'].push({ maViTri: Number(keyword) });
        }
        if (keyword && (0, lodash_1.isEmpty)(args.where))
            args.where = { id: 0 };
        return await (0, paginate_util_1.paginate)(this.prisma.phong, args, page, take);
    }
    async detail(id) {
        return await this.prisma.phong.findFirstOrThrow({ where: { id } });
    }
    async updateImg(id, uploadViTriHinhAnhResDto) {
        await this.detail(id);
        return await this.prisma.phong.update({ where: { id }, data: uploadViTriHinhAnhResDto });
    }
    async delete(id) {
        await this.detail(id);
        await this.prisma.phong.delete({ where: { id } });
        return { id };
    }
};
exports.PhongService = PhongService;
exports.PhongService = PhongService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PhongService);
//# sourceMappingURL=phong.service.js.map