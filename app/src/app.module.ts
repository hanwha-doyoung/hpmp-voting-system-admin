import * as path from 'path';
import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CompressionMiddleware, ConfigModule, HealthCheckClientModule, LoggerMiddleware,
    RequestContextMiddleware} from "@hanwha-blockchain/hc-core-hchain-framework-js";
import {CustomConfigService} from "./custom-config.service";
import {ExternalTransactionModule} from "./external-transaction/external-transaction.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {UserEntity} from "./users/user.entity";
import {AdminModule} from "./admin-api/admin.module";
import {VoteEntity} from "./admin-api/vote.entity";
import {AdminEntity} from "./admin-api/admin.entity";

const configDynamicService: CustomConfigService = new CustomConfigService(path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'dev') ? '.dev' : '')}`));

@Module({
  imports: [
      ConfigModule.forRootAsync({
          provide: CustomConfigService,
          useValue: configDynamicService,
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configSerivce: CustomConfigService) => (<TypeOrmModuleOptions>{
              type: configSerivce.db!.type,
              host: configSerivce.db!.host,
              port: configSerivce.db!.port,
              username: configSerivce.db!.username,
              password: configSerivce.db!.password,
              database: configSerivce.db!.database,
              synchronize: configSerivce.db!.synchronize,
              logging: configSerivce.db!.logging,
              entities: [UserEntity, VoteEntity, AdminEntity],
          }),
          inject: [CustomConfigService],
      }),
      HealthCheckClientModule,
      ExternalTransactionModule,
      AuthModule,
      UsersModule,
      AdminModule
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
