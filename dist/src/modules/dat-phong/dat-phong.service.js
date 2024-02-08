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
exports.DatPhongService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const paginate_util_1 = require("../../../libs/share/src/core/utils/paginate.util");
const auth_util_1 = require("../../../libs/share/src/core/utils/auth.util");
const lodash_1 = require("lodash");
let DatPhongService = class DatPhongService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDatPhongReqDto) {
        await this.prisma.phong.findFirstOrThrow({ where: { id: createDatPhongReqDto.maPhong } });
        return await this.prisma.datPhong.create({
            data: createDatPhongReqDto
        });
    }
    async list({ take, page, keyword }) {
        const args = { where: { OR: [] } };
        if (!(0, lodash_1.isNaN)(Number(keyword))) {
            args.where['OR'].push({ maPhong: Number(keyword) }, { maNguoiDat: Number(keyword) });
        }
        if (keyword && !args.where.OR.length)
            args.where = { id: 0 };
        if ((0, auth_util_1.getCurrentUser)().role !== 'admin') {
            args['where']['maNguoiDat'] = (0, auth_util_1.getCurrentUser)().id;
        }
        return await (0, paginate_util_1.paginate)(this.prisma.datPhong, args, page, take);
    }
    async detail(id) {
        const args = { where: { id } };
        if ((0, auth_util_1.getCurrentUser)().role !== 'admin')
            args.where.maNguoiDat = (0, auth_util_1.getCurrentUser)().id;
        return await this.prisma.datPhong.findFirstOrThrow(args);
    }
    async update(id, updateDatPhongReqDto) {
        await this.detail(id);
        return await this.prisma.viTri.update({ where: { id }, data: updateDatPhongReqDto });
    }
    async delete(id) {
        await this.detail(id);
        await this.prisma.viTri.delete({ where: { id } });
        return { id };
    }
};
exports.DatPhongService = DatPhongService;
exports.DatPhongService = DatPhongService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DatPhongService);
//# sourceMappingURL=dat-phong.service.js.map