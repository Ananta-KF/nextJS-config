import { IsInt, IsString, IsBoolean } from 'class-validator';

export class AppConfig {
  @IsInt()
  PORT: number;

  @IsString()
  MODE: string;

  @IsBoolean()
  RUN_MIGRATIONS: boolean;

  @IsString()
  OTEL_EXPORTER_OTLP_ENDPOINT: string;

  @IsString()
  LOG_LEVEL: string;
}
