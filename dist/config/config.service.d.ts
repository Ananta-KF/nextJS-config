import { ConfigService as NestConfigService } from '@nestjs/config';
export declare class ConfigService {
    private configService;
    constructor(configService: NestConfigService);
    get port(): number;
    get mode(): string;
    get runMigrations(): boolean;
    get otelExporterOtlpEndpoint(): string;
    get logLevel(): string;
}
//# sourceMappingURL=config.service.d.ts.map