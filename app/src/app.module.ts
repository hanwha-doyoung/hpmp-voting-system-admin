import * as path from 'path';
import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
    CompressionMiddleware, ConfigModule,
    HealthCheckClientModule, LoggerMiddleware,
    RequestContextMiddleware
} from "@hanwha-blockchain/hc-core-hchain-framework-js";
import {CustomConfigService} from "./custom-config.service";
import {ExternalTransactionModule} from "./external-transaction/external-transaction.module";

const configDynamicService: CustomConfigService = new CustomConfigService(path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'dev') ? '.dev' : '')}`));

@Module({
  imports: [
      ConfigModule.forRootAsync({
          provide: CustomConfigService,
          useValue: configDynamicService,
      }),
      HealthCheckClientModule,
      ExternalTransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RequestContextMiddleware, CompressionMiddleware, LoggerMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL })
    }
}