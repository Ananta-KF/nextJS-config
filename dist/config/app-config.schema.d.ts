export declare class AppConfig {
    PORT?: number;
    MODE?: string;
    RUN_MIGRATIONS?: boolean;
    OTEL_EXPORTER_OTLP_ENDPOINT?: string;
    LOG_LEVEL?: string;
}
export declare function validate(config: Record<string, any>): AppConfig;
//# sourceMappingURL=app-config.schema.d.ts.map