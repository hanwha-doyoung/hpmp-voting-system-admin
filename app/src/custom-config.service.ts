import { Injectable } from '@nestjs/common';
import {ConfigService, getOsEnv, toBool, toNumber} from "@hanwha-blockchain/hc-core-hchain-framework-js";

@Injectable()
export class CustomConfigService extends ConfigService {
    server: {
        ebfServerUrl: string;
        ebfServerPrefix: string;
        socketTimeout: number;
    }

    database: {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        logging: boolean;
    }

    constructor(filePath: string) {
        super(filePath);

        this.server = {
            ebfServerUrl: `${getOsEnv('EBF_SERVER_PROTOCOL')}://${getOsEnv('EBF_SERVER_IP')}:${getOsEnv('EBF_SERVER_PORT')}`,
            ebfServerPrefix: getOsEnv('EBF_SERVER_PREFIX'),
            socketTimeout: toNumber(getOsEnv('SOCKET_TIMEOUT')),
        };

        this.database = {
            type: `${getOsEnv('TYPEORM_CONNECTION')}`,
            host: `${getOsEnv('TYPEORM_HOST')}`,
            port: `${getOsEnv('TYPEORM_PORT')}`,
            username: `${getOsEnv('TYPEORM_USERNAME')}`,
            password: `${getOsEnv('TYPEORM_PASSWORD')}`,
            database: `${getOsEnv('TYPEORM_DATABASE')}`,
            synchronize: toBool(`${getOsEnv('TYPEORM_SYNCHRONIZE')}`),
            logging: toBool(`${getOsEnv('TYPEORM_LOGGING')}`),
        }


    }
}
