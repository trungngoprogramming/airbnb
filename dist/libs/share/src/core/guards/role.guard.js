"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const auth_util_1 = require("../utils/auth.util");
class RoleGuard {
    constructor(roleAccess) {
        this.roleAccess = roleAccess;
    }
    async canActivate() {
        const currentUser = (0, auth_util_1.getCurrentUser)();
        if (!this.roleAccess)
            return true;
        return this.roleAccess.includes(currentUser?.role);
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map