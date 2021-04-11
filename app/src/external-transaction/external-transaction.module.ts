import { Module } from '@nestjs/common';
import { EbfExternalTransactionService } from './ebf-external-transaction.service';


@Module({
    imports: [
    ],
    controllers: [],
    providers: [EbfExternalTransactionService],
    exports: [EbfExternalTransactionService]
})
export class ExternalTransactionModule {

}
