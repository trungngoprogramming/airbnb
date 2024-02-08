"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha3512 = exports.getCurrentUser = void 0;
const crypto = require("crypto");
const nestjs_cls_1 = require("nestjs-cls");
const getCurrentUser = () => {
    return nestjs_cls_1.ClsServiceManager.getClsService().get('currentUser') ?? undefined;
};
exports.getCurrentUser = getCurrentUser;
const sha3512 = (plaintext) => {
    return crypto.createHash('sha3-512').update(plaintext).digest('hex');
};
exports.sha3512 = sha3512;
//# sourceMappingURL=auth.util.js.map