import { CanActivate } from "@nestjs/common";
import { getCurrentUser } from "../utils/auth.util";

export class RoleGuard implements CanActivate {
  roleAccess: string[];
  constructor(roleAccess: string[]) {
    this.roleAccess = roleAccess;
  }

  async canActivate(): Promise<boolean> {
    const currentUser = getCurrentUser();

    if (!this.roleAccess) return true;

    return this.roleAccess.includes(currentUser?.role);
  }
}
