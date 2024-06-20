import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SomeService {
  constructor(private configService: ConfigService) {
    console.log('Port:', this.configService.get('PORT'));
    console.log('Mode:', this.configService.get('MODE'));
    console.log('Run Migrations:', this.configService.get('RUN_MIGRATIONS'));
    console.log('OTLP Endpoint:', this.configService.get('OTEL_EXPORTER_OTLP_ENDPOINT'));
    console.log('Log Level:', this.configService.get('LOG_LEVEL'));
  }
}
