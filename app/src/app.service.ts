import { Injectable } from '@nestjs/common';
import {EbfExternalTransactionService} from "./external-transaction/ebf-external-transaction.service";
import {IEbfSendViewResponse, IEbfSendViewRequest} from "./external-transaction/dto/ebf-external-transaction.dto";
import {AdminService} from "./admin-api/admin.service";

@Injectable()
export class AppService {
  constructor(
      private adminService: AdminService,
      protected readonly ebfExternalTransactionService: EbfExternalTransactionService,
  ){
    this.adminService = adminService;
  }

  /**
   * getAllProposals
   * @param contractName
   */
  public async getAllProposals(contractName: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getAllProposals', param);
  }

  /**
   * getProposalName
   * @param contractName
   * @param parameters index of the proposal
   */
  public async getProposalName(contractName: string, parameters: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      parameters: {"idx" : parameters},
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getProposalName', param);
  }

  /**
   * getProposalVoteCount
   * @param contractName
   * @param parameters index of the proposal
   */
  public async getProposalVoteCount(contractName: string, parameters: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      parameters: {"idx" : parameters},
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getProposalVoteCount', param);
  }

  /**
   * getAllProposals
   * @param contractName
   */
  public async getAllProposalVoteCount(contractName: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getAllProposalVoteCount', param);
  }

  /**
   * getNumberOfProposals
   * @param contractName
   */
  public async getNumberOfProposals(contractName: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getNumberOfProposals', param);
  }

  /**
   * winningProposal
   * @param contractName
   */
  public async winningProposal(contractName: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'winningProposal', param);
  }

  /**
   * winnerName
   * @param contractName
   */
  public async winnerName(contractName: string): Promise<IEbfSendViewResponse> {
    let vote = await this.adminService.findVote(contractName);
    let param = <IEbfSendViewRequest<object>> {
      contractAddress: vote.contractaddress,
    }
    return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'winnerName', param);
  }

  // SendView functions
  /**
   * isChairperson
   * @param contractName
   * @param parameters address of the sender
   */
  // public async isChairperson(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
  //   return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'isChairperson', parameters);
  // }
  /**
   * getChairperson
   * @param contractName
   * @param parameters
   */
  // public async getChairperson(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
  //   return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getChairperson', parameters);
  // }

  /**
   * getWeight
   * @param contractName
   * @param parameters address of the voter
   */
  // public async getWeight(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
  //   return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getWeight', parameters);
  // }

  /**
   * getVoted
   * @param contractName
   * @param parameters address of the voter
   //  */
  // public async getVoted(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
  //   return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getVoted', parameters);
  // }

  /**
   * getVote
   * @param contractName
   * @param parameters address of the voter
   */
  // public async getVote(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
  //   return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getVote', parameters);
  // }

  /**
   * TODO: Not for verson1
   * getDelegate
   * @param contractName
   * @param parameters address of the voter
   */
  // public async getDelegate(contractName: string, parameters: IEbfSendViewRequest<Object>): Promise<IEbfSendViewResponse> {
  //   return <IEbfSendViewResponse> await this.ebfExternalTransactionService.sendView(contractName, 'getDelegate', parameters);
  // }


}
