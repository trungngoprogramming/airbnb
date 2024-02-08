export declare const paginate: (model: any, args: any, page?: number | string, take?: number | string) => Promise<{
    data: any;
    meta: {
        total: any;
        currentPage: number;
        take: number;
    };
}>;
