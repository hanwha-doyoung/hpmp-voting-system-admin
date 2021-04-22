import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from "./users.controller";
import {UserEntity} from "./user.entity";
import {ExternalTransactionModule} from "../external-transaction/external-transaction.module";
import {AdminModule} from "../admin-api/admin.module";


@Module({
  imports: [
      TypeOrmModule.forFeature([ UserEntity]),
      ExternalTransactionModule,
      AdminModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
