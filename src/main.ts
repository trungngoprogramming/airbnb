import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { InternalServerExceptionFilter } from 'libs/share/src/core/filters/internal-server-exception.filter';
import { UnauthorizedExceptionFilter } from 'libs/share/src/core/filters/unauthoried-exception.filter';
import { ForbiddenExceptionFilter } from 'libs/share/src/core/filters/forbidden-exception.filter';
import { BadRequestExceptionFilter } from 'libs/share/src/core/filters/bad-request-exception.filter';
import { QueryFailedErrorFilter } from 'libs/share/src/core/filters/query-failed-exception.filter';
import { PageNotFoundExceptionFilter } from 'libs/share/src/core/filters/page-not-found-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) =>
        new BadRequestException(errors),
    }),
  );
  app.useGlobalFilters(
    new InternalServerExceptionFilter(),
    new UnauthorizedExceptionFilter(),
    new ForbiddenExceptionFilter(),
    new BadRequestExceptionFilter(),
    new QueryFailedErrorFilter(),
    new PageNotFoundExceptionFilter(),
  );

  const conf = new DocumentBuilder()
    .setTitle('Air bnb')
    .setDescription('Air bnb docs')
    .setVersion('0.1')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();
  const doc = SwaggerModule.createDocument(app, conf);
  // writeFileSync('./docs/api/air-bnb.yaml', dump(doc, {}));
  SwaggerModule.setup('docs', app, doc);

  await app.listen(3000);
}
bootstrap();
