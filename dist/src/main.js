"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const internal_server_exception_filter_1 = require("../libs/share/src/core/filters/internal-server-exception.filter");
const unauthoried_exception_filter_1 = require("../libs/share/src/core/filters/unauthoried-exception.filter");
const forbidden_exception_filter_1 = require("../libs/share/src/core/filters/forbidden-exception.filter");
const bad_request_exception_filter_1 = require("../libs/share/src/core/filters/bad-request-exception.filter");
const query_failed_exception_filter_1 = require("../libs/share/src/core/filters/query-failed-exception.filter");
const page_not_found_exception_filter_1 = require("../libs/share/src/core/filters/page-not-found-exception.filter");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const js_yaml_1 = require("js-yaml");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        exceptionFactory: (errors) => new common_1.BadRequestException(errors),
    }));
    app.useGlobalFilters(new internal_server_exception_filter_1.InternalServerExceptionFilter(), new unauthoried_exception_filter_1.UnauthorizedExceptionFilter(), new forbidden_exception_filter_1.ForbiddenExceptionFilter(), new bad_request_exception_filter_1.BadRequestExceptionFilter(), new query_failed_exception_filter_1.QueryFailedErrorFilter(), new page_not_found_exception_filter_1.PageNotFoundExceptionFilter());
    const conf = new swagger_1.DocumentBuilder()
        .setTitle('Air bnb')
        .setDescription('Air bnb docs')
        .setVersion('0.1')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
        .build();
    const doc = swagger_1.SwaggerModule.createDocument(app, conf);
    (0, fs_1.writeFileSync)('./docs/api/air-bnb.yaml', (0, js_yaml_1.dump)(doc, {}));
    swagger_1.SwaggerModule.setup('docs', app, doc);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map