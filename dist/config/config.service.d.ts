import { ConfigService as NestConfigService } from '@nestjs/config';
export declare class ConfigService {
    private configService;
    constructor(configService: NestConfigService);
    get(key: string): any;
}
//# sourceMappingURL=config.service.d.ts.map