import { Injectable } from '@nestjs/common';
import { isNullOrUndefined } from 'util';
import {
    CryptoUtil,
    CustomLoggerService,
    ExternalServerException,
    TransactionUtil
} from "@hanwha-blockchain/hc-core-hchain-framework-js";
import {CustomConfigService} from "../custom-config.service";
import {
    IEbfContractRegisterRequest,
    IEbfContractRegisterResponse,
    IEbfSendTransactionRequest,
    IEbfSendTransactionResponse,
    IEbfSendViewRequest, IEbfSendViewResponse
} from "./dto/ebf-external-transaction.dto";
import {IAccount} from "../dto/account.dto";

@Injectable()
export class EbfExternalTransactionService {
    private readonly logger: CustomLoggerService = new CustomLoggerService();
    private transactionUtil: TransactionUtil = new TransactionUtil('EBF', this.configService.server.ebfServerUrl, this.configService.server.socketTimeout);

    constructor(
        protected readonly configService: CustomConfigService,
    ) { }

    /**
     * Token contract의 조회 메소드 호출
     * @param contractName
     * @param functionName
     * @param param
     */
    public async sendView(contractName: string, functionName: string, param: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
        const requestUrl: string = `${this.configService.server.ebfServerPrefix}/sendView/${contractName}/${functionName}`;

        // 1. send reqeust
        const hres = await this.transactionUtil.restPostTransaction(requestUrl, param);
        // 2. response handling
        if (!(hres.statusCode >= 200 && hres.statusCode < 300) || isNullOrUndefined(hres.result)) {
            throw new ExternalServerException(`EBF server request failed - ${this.configService.server.ebfServerUrl}${requestUrl}`);
        }
        const resultValue = hres.result;

        return <IEbfSendViewResponse>resultValue;
    }


    /**
     * Token contract의 처리 메소드 호출
     * @param contractName
     * @param functionName
     * @param param
     */
    public async sendTransaction(contractName: string, functionName: string, param: IEbfSendTransactionRequest<Object>): Promise<IEbfSendTransactionResponse> {
        const requestUrl: string = `sendTransaction/${contractName}/${functionName}`;

        return this.sendTransactionToEbf(requestUrl, param);
    }

    /**
     * Contract 배포
     * @param param
     */
    public async sendRegistTransaction(param: IEbfContractRegisterRequest<Object>): Promise<IEbfContractRegisterResponse> {
        const requestUrl: string = `sendTransaction/registerContract`;

        // 1. send reqeust
        const registerResult = await this.sendTransactionToEbf(requestUrl, param);

        return <IEbfContractRegisterResponse>{
            txHash: registerResult.transactionHash,
            contractAddress: registerResult.contractAddress,
        };
    }


    public async createAccount(): Promise<IAccount> {
        const requestUrl: string = `/account/create`;
        let param = {"passphrase" : "1234"};
        let result = await this.sendTransactionToEbf(requestUrl, param);
        return <IAccount>{
            address: result.address,
            keystore: result.keystore,
            privateKey: result.privateKey,
        };
    }
    public encodeAccount(account: IAccount): string {
        return CryptoUtil.encBase64(JSON.stringify(account.keystore));
    }

    private async sendTransactionToEbf(url: string, param: Object): Promise<any> {
        const requestUrl: string = `${this.configService.server.ebfServerPrefix}/${url}`;

        try {
            // 1. send reqeust
            const hres = await this.transactionUtil.restPostTransaction(requestUrl, param);
            const txResult = hres.result;

            // 2. response handling
            if (!(hres.statusCode >= 200 && hres.statusCode < 300)) {
                throw new ExternalServerException(`EBF server request failed - ${this.configService.server.ebfServerUrl}${requestUrl}`);
            }

            return txResult;
        } catch (exception) {

            this.logger.error(exception.toString());
            throw new ExternalServerException(`Failed EBF Transaction Request Service`);
        }
    }
}
