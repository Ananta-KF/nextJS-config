import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig(): any {
    const configKeys = [
      'PORT',
      'MODE',
      'RUN_MIGRATIONS',
      'OTEL_EXPORTER_OTLP_ENDPOINT',
      'LOG_LEVEL'
    ];
    
    const config = {};
    configKeys.forEach(key => {
      config[key] = this.configService.get(key);
    });

    return config;
  }
}
