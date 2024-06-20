import { IsOptional, IsString, IsInt, IsBoolean, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class AppConfig {
  @IsOptional() @IsInt() PORT?: number;
  @IsOptional() @IsString() MODE?: string;
  @IsOptional() @IsBoolean() RUN_MIGRATIONS?: boolean;
  @IsOptional() @IsString() OTEL_EXPORTER_OTLP_ENDPOINT?: string;
  @IsOptional() @IsString() LOG_LEVEL?: string;
}

export function validate(config: Record<string, any>) {
  const validatedConfig = plainToClass(AppConfig, config);
  const errors = validateSync(validatedConfig, { skipMissingProperties: true });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
