import { CanActivate } from "@nestjs/common";
export declare class RoleGuard implements CanActivate {
    roleAccess: string[];
    constructor(roleAccess: string[]);
    canActivate(): Promise<boolean>;
}
