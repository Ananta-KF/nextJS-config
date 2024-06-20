import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ConfigService } from '../config/config.service';
import { loadConfigurations } from '../config/load-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        async () => {
          const config = await loadConfigurations();
          return config;
        }
      ],
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
