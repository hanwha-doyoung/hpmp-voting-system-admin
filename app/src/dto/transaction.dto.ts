export interface IKeystore {
    address: string;
    encodedKeystore: string;
    passphrase: string;
}

export interface IResponseTransaction {
}

export interface IResponseBuildTransaction extends IResponseTransaction {
    signedTransaction: string;
}

export interface IResponseSendTransaction extends IResponseTransaction {
    status: boolean;
    transactionHash: string;
}

