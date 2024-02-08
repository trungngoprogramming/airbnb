"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = async (model, args, page, take) => {
    page = Number(page) || 1;
    take = Number(take) || 10;
    const skip = page > 0 ? take * (page - 1) : 0;
    const [total, data] = await Promise.all([
        model.count({ where: args.where }),
        model.findMany({
            ...args,
            take,
            skip,
        }),
    ]);
    return {
        data,
        meta: {
            total,
            currentPage: page,
            take,
        },
    };
};
exports.paginate = paginate;
//# sourceMappingURL=paginate.util.js.map