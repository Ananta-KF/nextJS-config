import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get port(): number {
    return this.configService.get<number>('PORT');
  }

  get mode(): string {
    return this.configService.get<string>('MODE');
  }

  get runMigrations(): boolean {
    return this.configService.get<boolean>('RUN_MIGRATIONS');
  }

  get otelExporterOtlpEndpoint(): string {
    return this.configService.get<string>('OTEL_EXPORTER_OTLP_ENDPOINT');
  }

  get logLevel(): string {
    return this.configService.get<string>('LOG_LEVEL');
  }
}
