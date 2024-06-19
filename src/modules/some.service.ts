import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SomeService {
  constructor(private configService: ConfigService) {
    console.log('Port:', this.configService.port);
    console.log('Mode:', this.configService.mode);
    console.log('Run Migrations:', this.configService.runMigrations);
    console.log('OTLP Endpoint:', this.configService.otelExporterOtlpEndpoint);
    console.log('Log Level:', this.configService.logLevel);
  }
}
