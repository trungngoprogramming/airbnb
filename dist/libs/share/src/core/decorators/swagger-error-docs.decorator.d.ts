import { Prisma } from "@prisma/client";
type ExcludeError = 'notFound' | 'badRequest' | 'unauthorized' | 'forbidden' | 'internalServer';
type Options = {
    exclude?: ExcludeError[];
    notFoundTarget?: Prisma.ModelName[];
    badRequestTarget?: object[];
    badRequestFromService?: {
        code: string;
        message: string;
    }[];
};
export declare function ApiPropertyError(...codes: string[]): (target: any, propertyKey?: string) => void;
export declare function ApiErrorDocs(options: Options): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export {};
