import { Injectable } from '@nestjs/common';
import {CustomLoggerService, TransactionUtil} from '@hanwha-blockchain/hc-core-hchain-framework-js';
import {CustomConfigService} from "./custom-config.service";
import {EbfExternalTransactionService} from "./external-transaction/ebf-external-transaction.service";
import {
  IEbfSendTransactionRequest,
  IEbfSendTransactionResponse,
  IEbfSendViewResponse,
  IEbfContractRegisterRequest, IEbfContractRegisterResponse, IEbfSendViewRequest
} from "./external-transaction/dto/ebf-external-transaction.dto";

@Injectable()
export class AppService {
  private readonly logger: CustomLoggerService = new CustomLoggerService();
  private transactionUtil: TransactionUtil = new TransactionUtil('EBF', this.configService.server.ebfServerUrl, this.configService.server.socketTimeout);

  constructor(
      protected readonly configService: CustomConfigService,
      protected readonly ebfExternalTransactionService: EbfExternalTransactionService,

  ){}


  /**
   * Vote 생성
   * @param parameters requestRegisterContractDTO
   */
  public async deployVote(parameters: IEbfContractRegisterRequest<Object>): Promise<IEbfContractRegisterResponse> {
    return <IEbfContractRegisterResponse> await this.ebfExternalTransactionService.sendRegistTransaction(parameters);
  }

  // SendTransaction functions
  /**
   * addProposal
   * @param contractName
   * @param parameters proposalName
   */
  public async addProposal(contractName: string, parameters: IEbfSendTransactionRequest<Object>): Promise<IEbfSendTransactionResponse> {
    return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'addProposal', parameters);
  }

  /**
   * giveRightToVote
   * @param contractName
   * @param parameters voterAddress
   */
  public async giveRightToVote(contractName: string, parameters: IEbfSendTransactionRequest<Object>): Promise<IEbfSendTransactionResponse> {
    return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'giveRightToVote', parameters);

  }

  /**
   * vote
   * @param contractName
   * @param parameters proposalIdx
   */
  public async vote(contractName: string, parameters: IEbfSendTransactionRequest<Object>): Promise<IEbfSendTransactionResponse> {
    return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'vote', parameters);
  }



  // SendView functions
  /**
   * isChairperson
   * @param contractName
   * @param parameters address of the sender
   */
  public async isChairperson(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'isChairperson', parameters);
  }
  /**
   * getChairperson
   * @param contractName
   * @param parameters
   */
  public async getChairperson(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getChairperson', parameters);
  }

  /**
   * getWeight
   * @param contractName
   * @param parameters address of the voter
   */
  public async getWeight(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getWeight', parameters);
  }

  /**
   * getVoted
   * @param contractName
   * @param parameters address of the voter
   */
  public async getVoted(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getVoted', parameters);
  }

  /**
   * getVote
   * @param contractName
   * @param parameters address of the voter
   */
  public async getVote(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getVote', parameters);
  }

  /**
   * TODO: Not for verson1
   * getDelegate
   * @param contractName
   * @param parameters address of the voter
   */
  public async getDelegate(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getDelegate', parameters);
  }

  /**
   * getProposalName
   * @param contractName
   * @param parameters index of the proposal
   */
  public async getProposalName(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getProposalName', parameters);
  }

  /**
   * getProposalVoteCount
   * @param contractName
   * @param parameters index of the proposal
   */
  public async getProposalVoteCount(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getProposalVoteCount', parameters);
  }

  /**
   * getNumberOfProposals
   * @param contractName
   * @param parameters index of the proposal
   */
  public async getNumberOfProposals(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getNumberOfProposals', parameters);
  }

  /**
   * winningProposal
   * @param contractName
   * @param parameters
   */
  public async winningProposal(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'winningProposal', parameters);
  }

  /**
   * winnerName
   * @param contractName
   * @param parameters
   */
  public async winnerName(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'winnerName', parameters);
  }


}
