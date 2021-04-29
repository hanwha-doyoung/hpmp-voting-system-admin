import {Module} from "@nestjs/common";
import {AdminService} from "./admin.service";
import {AdminController} from "./admin.controller";
import {ConfigModule} from "@hanwha-blockchain/hc-core-hchain-framework-js";
import {ExternalTransactionModule} from "../external-transaction/external-transaction.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AdminEntity} from "./admin.entity";
import {VoteEntity} from "./vote.entity";
import {UserEntity} from "../users/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminEntity, VoteEntity, UserEntity]),
        ConfigModule,
        ExternalTransactionModule,
    ],
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService]
})
export class AdminModule {


}
