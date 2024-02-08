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
exports.BinhLuanService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const paginate_util_1 = require("../../../libs/share/src/core/utils/paginate.util");
const auth_util_1 = require("../../../libs/share/src/core/utils/auth.util");
const lodash_1 = require("lodash");
let BinhLuanService = class BinhLuanService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBinhLuanReqDto) {
        return await this.prisma.binhLuan.create({
            data: createBinhLuanReqDto
        });
    }
    async list({ take, page, keyword }) {
        const args = {};
        if (keyword)
            args.where = {
                OR: [
                    { noiDung: { contains: keyword } },
                ]
            };
        if (!(0, lodash_1.isNaN)(Number(keyword))) {
            args.where['OR'].push({ saoBinhLuan: Number(keyword) }, { maPhong: Number(keyword) }, { maNguoiBinhLuan: Number(keyword) });
        }
        if (keyword && (0, lodash_1.isEmpty)(args.where))
            args.where = { id: 0 };
        return await (0, paginate_util_1.paginate)(this.prisma.binhLuan, args, page, take);
    }
    async detail(id) {
        return await this.prisma.binhLuan.findFirstOrThrow({ where: { id } });
    }
    async update(id, updateBinhLuanReqDto) {
        const binhLuan = await this.detail(id);
        if ((0, auth_util_1.getCurrentUser)().id !== binhLuan.maNguoiBinhLuan) {
            throw new common_1.ForbiddenException();
        }
        return await this.prisma.binhLuan.update({ where: { id }, data: updateBinhLuanReqDto });
    }
    async delete(id) {
        const binhLuan = await this.detail(id);
        if ((0, auth_util_1.getCurrentUser)().id !== binhLuan.maNguoiBinhLuan) {
            throw new common_1.ForbiddenException();
        }
        await this.prisma.binhLuan.delete({ where: { id } });
        return { id };
    }
};
exports.BinhLuanService = BinhLuanService;
exports.BinhLuanService = BinhLuanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BinhLuanService);
//# sourceMappingURL=binh-luan.service.js.map