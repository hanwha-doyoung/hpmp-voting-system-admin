import { Injectable } from '@nestjs/common';
import {ConfigService, getOsEnv, toNumber} from "@hanwha-blockchain/hc-core-hchain-framework-js";

@Injectable()
export class CustomConfigService extends ConfigService {
    server: {
        ebfServerUrl: string;
        ebfServerPrefix: string;
        socketTimeout: number;
    }

    contract: {
        filePath: string;
    }

    constructor(filePath: string) {
        super(filePath);

        this.server = {
            ebfServerUrl: `${getOsEnv('EBF_SERVER_PROTOCOL')}://${getOsEnv('EBF_SERVER_IP')}:${getOsEnv('EBF_SERVER_PORT')}`,
            ebfServerPrefix: getOsEnv('EBF_SERVER_PREFIX'),
            socketTimeout: toNumber(getOsEnv('SOCKET_TIMEOUT')),
        };

        // this.contract = {
        //     filePath: getOsEnv('CONTRACT_FILE_PATH'),
        // };

    }
}