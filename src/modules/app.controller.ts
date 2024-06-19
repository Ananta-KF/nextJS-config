import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig(): any {
    return {
      port: this.configService.port,
      mode: this.configService.mode,
      runMigrations: this.configService.runMigrations,
      otelExporterOtlpEndpoint: this.configService.otelExporterOtlpEndpoint,
      logLevel: this.configService.logLevel
    };
  }

  @Get('hello')
  getHello(): string {
    return 'Hello, world!';
  }
}
