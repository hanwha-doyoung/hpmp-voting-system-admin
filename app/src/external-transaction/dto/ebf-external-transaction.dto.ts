/**
 * Execution Transaction
 */
export interface IEbfBuildSignedTransactionRequest<T> {
    address: string;
    encodedKeystore: string;
    passphrase: string;
    parameters: T;
    value: string;
    contractAddress?: string
}

export interface IEbfBuildSignedTransactionResponse {
    signedTransaction: string;
}


export interface IEbfSignTransactionRequest {
    transaction: string;
    encodedKeystore: string;
    passphrase: string
}

export interface IEbfSignTransactionResponse {
    signedTransaction: string;
}


export interface IEbfSendSignedTransactionRequest {
    transaction: string
}

export interface IEbfSendTransactionRequest<T> {
    encodedKeystore: string;
    passphrase: string;
    parameters: T;
    value: string;
    contractAddress?: string;
}

export interface IEbfSendTransactionResponse {
    status: boolean;
    transactionHash: string;
}

export interface IEbfSendViewRequest<T> {
    contractAddress?: string;
    parameters: T;
}

export interface IEbfSendViewResponse {
    result: any;
}




/**
 * Register Transaction
 */
export interface IEbfContractRegisterRequest<ContractConstructObject>{
    encodedKeystore: string;
    passphrase: string;

    contractName: string;
    abi: string;
    bytecode: string;
    constructArgs: ContractConstructObject;

    value: number;

    isUpgradable?: boolean;
}

export interface IEbfContractRegisterResponse {
    txHash: string;
    contractAddress: string;
}