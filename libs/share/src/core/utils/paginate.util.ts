export const paginate = async (model: any, args: any, page?: number | string, take?: number | string) => {
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
}
