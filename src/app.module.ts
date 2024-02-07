import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auths/auth.module';
import { ViTriModule } from './modules/vi-tri/vi-tri.module';
import { PassportModule } from '@nestjs/passport';
import { ClsModule } from 'nestjs-cls';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true }
    }),
    AuthModule,
    ViTriModule,
  ],
})
export class AppModule { }
