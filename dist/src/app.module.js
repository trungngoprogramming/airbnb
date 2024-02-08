"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./modules/auths/auth.module");
const vi_tri_module_1 = require("./modules/vi-tri/vi-tri.module");
const passport_1 = require("@nestjs/passport");
const nestjs_cls_1 = require("nestjs-cls");
const nguoi_dung_module_1 = require("./modules/nguoi-dung/nguoi-dung.module");
const phong_module_1 = require("./modules/phong/phong.module");
const binh_luan_module_1 = require("./modules/binh-luan/binh-luan.module");
const dat_phong_module_1 = require("./modules/dat-phong/dat-phong.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            nestjs_cls_1.ClsModule.forRoot({
                global: true,
                middleware: { mount: true }
            }),
            auth_module_1.AuthModule,
            vi_tri_module_1.ViTriModule,
            nguoi_dung_module_1.NguoiDungModule,
            phong_module_1.PhongModule,
            binh_luan_module_1.BinhLuanModule,
            dat_phong_module_1.DatPhongModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map