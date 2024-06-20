import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { AppController } from './app.controller';
import { AppConfig } from '../config/app-config.schema';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => {
          //const jsonConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
          const yamlConfig = yaml.load(fs.readFileSync('config.yml', 'utf8')) as Record<string, any>;
          return { /*...jsonConfig,*/ ...yamlConfig };
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
