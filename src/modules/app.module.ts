import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService as NestConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { AppConfig } from '../config/app-config.schema';
import { AppController } from './app.controller';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => JSON.parse(fs.readFileSync('config.json', 'utf8'))
      ],
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService, NestConfigService],
})
export class AppModule {}
