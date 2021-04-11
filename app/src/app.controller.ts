import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiResponse, ApiUseTags} from "@nestjs/swagger";
import {
  IEbfContractRegisterRequest,
  IEbfContractRegisterResponse, IEbfSendTransactionRequest, IEbfSendTransactionResponse, IEbfSendViewRequest
} from "./external-transaction/dto/ebf-external-transaction.dto";
import {
  RequestAddProposalDTO,
  RequestGetChairpersonDTO,
  RequestGetNumberOfProposalsDTO,
  RequestGetProposalNameDTO,
  RequestGetProposalVoteCountDTO,
  RequestGetVotedDTO,
  RequestGetVoteDTO,
  RequestGetWeightDTO, RequestGiveRightToVoteDTO,
  RequestIsChairpersonDTO,
  RequestRegisterContractDTO,
  RequestVoteDTO,
  RequestWinnerNameDTO,
  RequestWinnerProposalDTO,
  ResponseGetChairpersonDTO,
  ResponseGetNumberOfProposalsDTO,
  ResponseGetProposalNameDTO,
  ResponseGetProposalVoteCountDTO,
  ResponseGetVotedDTO,
  ResponseGetVoteDTO,
  ResponseGetWeightDTO,
  ResponseIsChairpersonDTO,
  ResponseWinnerNameDTO,
  ResponseWinnerProposalDTO
} from "./dto/transaction-controller.dto";
import {EbfExternalTransactionMapper} from "./external-transaction/ebf-external-transaction.mapper";

@ApiUseTags('Admin')
@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService
  ) {}


  @ApiOperation({ title: 'Vote 생성' })
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/deployVote')
  public async deployVote(@Body() requestRegisterContractDTO:RequestRegisterContractDTO): Promise<IEbfContractRegisterResponse> {
    const parameters: IEbfContractRegisterRequest<Object> = <IEbfContractRegisterRequest<Object>>{
      encodedKeystore: requestRegisterContractDTO.encodedKeystore,
      passphrase: requestRegisterContractDTO.passphrase,

      contractName: requestRegisterContractDTO.contractName,
      abi: requestRegisterContractDTO.abi,
      bytecode: requestRegisterContractDTO.bytecode,
      constructArgs: {},

      value: 0,
    }

    return await this.appService.deployVote(parameters);
  }

  // SendTransaction functions
  @ApiOperation({title: 'proposal 추가'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/addProposal')
  public async addProposal(
      @Body() requestAddProposalDTO:RequestAddProposalDTO): Promise<IEbfSendTransactionResponse> {
    const contractName = requestAddProposalDTO.contractName;
    const parameters: IEbfSendTransactionRequest<Object> = <IEbfSendTransactionRequest<Object>>{
      encodedKeystore: requestAddProposalDTO.encodedKeystore,
      passphrase: requestAddProposalDTO.passphrase,
      parameters: requestAddProposalDTO.parameters,
      value: requestAddProposalDTO.value,
      contractAddress: requestAddProposalDTO.contractAddress,
    }

    return await this.appService.addProposal(contractName, parameters);
  }

  @ApiOperation({title: 'giveRightToVote'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/giveRightToVote')
  public async giveRightToVote(
      @Body() requestGiveRightToVoteDTO:RequestGiveRightToVoteDTO): Promise<IEbfSendTransactionResponse> {
    const contractName = requestGiveRightToVoteDTO.contractName;
    const parameters: IEbfSendTransactionRequest<Object> = <IEbfSendTransactionRequest<Object>>{
      encodedKeystore: requestGiveRightToVoteDTO.encodedKeystore,
      passphrase: requestGiveRightToVoteDTO.passphrase,
      parameters: requestGiveRightToVoteDTO.parameters,
      value: requestGiveRightToVoteDTO.value,
      contractAddress: requestGiveRightToVoteDTO.contractAddress,
    }

    return await this.appService.giveRightToVote(contractName, parameters);
  }

  @ApiOperation({title: 'vote'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/vote')
  public async vote(
      @Body() requestVoteDTO:RequestVoteDTO): Promise<IEbfSendTransactionResponse> {
    const contractName = requestVoteDTO.contractName;
    const parameters: IEbfSendTransactionRequest<Object> = <IEbfSendTransactionRequest<Object>>{
      encodedKeystore: requestVoteDTO.encodedKeystore,
      passphrase: requestVoteDTO.passphrase,
      parameters: requestVoteDTO.parameters,
      value: requestVoteDTO.value,
      contractAddress: requestVoteDTO.contractAddress,
    }

    return await this.appService.vote(contractName, parameters);
  }

  // SendView functions
  @ApiOperation({title: 'chairperson 여부 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/isChairperson')
  public async isChairperson(
      @Body() requestIsChairpersonDTO:RequestIsChairpersonDTO): Promise<ResponseIsChairpersonDTO> {
    const contractName = requestIsChairpersonDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestIsChairpersonDTO.contractAddress,
      parameters: requestIsChairpersonDTO.parameters
    }

    return await this.appService.isChairperson(contractName, parameters);
  }

  @ApiOperation({title: 'chairperson address 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getChairperson')
  public async getChairperson(
      @Body() requestGetChairpersonDTO:RequestGetChairpersonDTO): Promise<ResponseGetChairpersonDTO> {
    const contractName = requestGetChairpersonDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetChairpersonDTO.contractAddress
    }
    return EbfExternalTransactionMapper.toGetChairpersonDTO(await this.appService.getChairperson(contractName, parameters));
  }

  @ApiOperation({title: 'voter의 투표 권한 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getWeight')
  public async getWeight(
      @Body() requestGetWeightDTO:RequestGetWeightDTO): Promise<ResponseGetWeightDTO> {
    const contractName = requestGetWeightDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetWeightDTO.contractAddress,
      parameters: requestGetWeightDTO.parameters
    }
    return EbfExternalTransactionMapper.toGetWeightDTO(await this.appService.getWeight(contractName, parameters));
  }

  @ApiOperation({title: 'voter의 투표 여부 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getVoted')
  public async getVoted(
      @Body() requestGetVotedDTO:RequestGetVotedDTO): Promise<ResponseGetVotedDTO> {
    const contractName = requestGetVotedDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetVotedDTO.contractAddress,
      parameters: requestGetVotedDTO.parameters
    }
    return await this.appService.getVoted(contractName, parameters);
  }

  @ApiOperation({title: 'voter의 투표 내용 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getVote')
  public async getVote(
      @Body() requestGetVoteDTO:RequestGetVoteDTO): Promise<ResponseGetVoteDTO> {
    const contractName = requestGetVoteDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetVoteDTO.contractAddress,
      parameters: requestGetVoteDTO.parameters
    }
    return EbfExternalTransactionMapper.toGetVoteDTO(await this.appService.getVote(contractName, parameters));
  }

  @ApiOperation({title: 'proposal 이름'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getProposalName')
  public async getProposalName(
      @Body() requestGetProposalNameDTO:RequestGetProposalNameDTO): Promise<ResponseGetProposalNameDTO> {
    const contractName = requestGetProposalNameDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetProposalNameDTO.contractAddress,
      parameters: requestGetProposalNameDTO.parameters
    }
    return EbfExternalTransactionMapper.toGetProposalNameDTO(await this.appService.getProposalName(contractName, parameters));
  }

  @ApiOperation({title: 'proposal이 받은 투표수 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getProposalVoteCount')
  public async getProposalVoteCount(
      @Body() requestGetProposalVoteCountDTO:RequestGetProposalVoteCountDTO): Promise<ResponseGetProposalVoteCountDTO> {
    const contractName = requestGetProposalVoteCountDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetProposalVoteCountDTO.contractAddress,
      parameters: requestGetProposalVoteCountDTO.parameters
    }
    return EbfExternalTransactionMapper.toGetProposalVoteCountDTO(await this.appService.getProposalVoteCount(contractName, parameters));
  }

  @ApiOperation({title: '전체 proposal의 수 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getNumberOfProposals')
  public async getNumberOfProposals(
      @Body() requestGetNumberOfProposalsDTO:RequestGetNumberOfProposalsDTO): Promise<ResponseGetNumberOfProposalsDTO> {
    const contractName = requestGetNumberOfProposalsDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestGetNumberOfProposalsDTO.contractAddress,
      parameters: requestGetNumberOfProposalsDTO.parameters
    }
    return EbfExternalTransactionMapper.toGetNumberOfProposalsDTO(await this.appService.getNumberOfProposals(contractName, parameters));
  }


  @ApiOperation({title: 'winnerProposal 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/winningProposal')
  public async winningProposal(
      @Body() requestWinnerProposalDTO:RequestWinnerProposalDTO): Promise<ResponseWinnerProposalDTO> {
    const contractName = requestWinnerProposalDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestWinnerProposalDTO.contractAddress
    }
    return EbfExternalTransactionMapper.toWinnerProposalDTO(await this.appService.winningProposal(contractName, parameters));
  }

  @ApiOperation({title: 'winnerName 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/winnerName')
  public async winnerName(
      @Body() requestWinnerNameDTO:RequestWinnerNameDTO): Promise<ResponseWinnerNameDTO> {
    const contractName = requestWinnerNameDTO.contractName;
    const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
      contractAddress: requestWinnerNameDTO.contractAddress
    }
    return EbfExternalTransactionMapper.toWinnerNameDTO(await this.appService.winnerName(contractName, parameters));
  }

}
