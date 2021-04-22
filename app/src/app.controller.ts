import {Body, Controller, Post, UseGuards, Request, Get, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiResponse, ApiUseTags} from "@nestjs/swagger";
import {RequestGetNumberOfProposalsDTO, RequestGetProposalNameDTO, RequestGetProposalVoteCountDTO,
  RequestWinnerNameDTO, RequestWinnerProposalDTO, ResponseGetNumberOfProposalsDTO, ResponseGetProposalNameDTO,
  ResponseGetProposalVoteCountDTO, ResponseWinnerNameDTO, ResponseWinnerProposalDTO} from "./dto/transaction-controller.dto";
import {EbfExternalTransactionMapper} from "./external-transaction/ebf-external-transaction.mapper";
import {AuthService} from "./auth/auth.service";

@ApiUseTags('Result Related API')
@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private authService: AuthService
  ) {}

  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.body);
    return this.authService.validateUser(req.body.userid, req.body.password);
  }

  @ApiOperation({title: 'proposal 이름'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getProposalName')
  public async getProposalName(
      @Body() requestGetProposalNameDTO:RequestGetProposalNameDTO): Promise<ResponseGetProposalNameDTO> {
    const contractName = requestGetProposalNameDTO.contractName;
    const parameters = requestGetProposalNameDTO.parameters;
    return EbfExternalTransactionMapper.toGetProposalNameDTO(await this.appService.getProposalName(contractName, parameters));
  }

  @ApiOperation({title: 'proposal이 받은 투표수 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getProposalVoteCount')
  public async getProposalVoteCount(
      @Body() requestGetProposalVoteCountDTO:RequestGetProposalVoteCountDTO): Promise<ResponseGetProposalVoteCountDTO> {
    const contractName = requestGetProposalVoteCountDTO.contractName;
    const parameters = requestGetProposalVoteCountDTO.parameters;
    return EbfExternalTransactionMapper.toGetProposalVoteCountDTO(await this.appService.getProposalVoteCount(contractName, parameters));
  }

  @ApiOperation({title: '전체 proposal의 수 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/getNumberOfProposals')
  public async getNumberOfProposals(
      @Body() requestGetNumberOfProposalsDTO:RequestGetNumberOfProposalsDTO): Promise<ResponseGetNumberOfProposalsDTO> {
    const contractName = requestGetNumberOfProposalsDTO.contractName;
    const parameters = requestGetNumberOfProposalsDTO.parameters;
    return EbfExternalTransactionMapper.toGetNumberOfProposalsDTO(await this.appService.getNumberOfProposals(contractName));
  }


  @ApiOperation({title: 'winnerProposal 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/winningProposal')
  public async winningProposal(
      @Body() requestWinnerProposalDTO:RequestWinnerProposalDTO): Promise<ResponseWinnerProposalDTO> {
    const contractName = requestWinnerProposalDTO.contractName;
    return EbfExternalTransactionMapper.toWinnerProposalDTO(await this.appService.winningProposal(contractName));
  }

  @ApiOperation({title: 'winnerName 확인'})
  @ApiResponse({ status: 201, description: 'Success' })
  @Post('/winnerName')
  public async winnerName(
      @Body() requestWinnerNameDTO:RequestWinnerNameDTO): Promise<ResponseWinnerNameDTO> {
    const contractName = requestWinnerNameDTO.contractName;
    return EbfExternalTransactionMapper.toWinnerNameDTO(await this.appService.winnerName(contractName));
  }


  // SendView functions
  // @ApiOperation({title: 'chairperson 여부 확인'})
  // @ApiResponse({ status: 201, description: 'Success' })
  // @Post('/isChairperson')
  // public async isChairperson(
  //     @Body() requestIsChairpersonDTO:RequestIsChairpersonDTO): Promise<ResponseIsChairpersonDTO> {
  //   const contractName = requestIsChairpersonDTO.contractName;
  //   const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
  //     contractAddress: requestIsChairpersonDTO.contractAddress,
  //     parameters: requestIsChairpersonDTO.parameters
  //   }
  //
  //   return await this.appService.isChairperson(contractName, parameters);
  // }

  // @ApiOperation({title: 'chairperson address 확인'})
  // @ApiResponse({ status: 201, description: 'Success' })
  // @Post('/getChairperson')
  // public async getChairperson(
  //     @Body() requestGetChairpersonDTO:RequestGetChairpersonDTO): Promise<ResponseGetChairpersonDTO> {
  //   const contractName = requestGetChairpersonDTO.contractName;
  //   const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
  //     contractAddress: requestGetChairpersonDTO.contractAddress
  //   }
  //   return EbfExternalTransactionMapper.toGetChairpersonDTO(await this.appService.getChairperson(contractName, parameters));
  // }

  // @ApiOperation({title: 'voter의 투표 권한 확인'})
  // @ApiResponse({ status: 201, description: 'Success' })
  // @Post('/getWeight')
  // public async getWeight(
  //     @Body() requestGetWeightDTO:RequestGetWeightDTO): Promise<ResponseGetWeightDTO> {
  //   const contractName = requestGetWeightDTO.contractName;
  //   const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
  //     contractAddress: requestGetWeightDTO.contractAddress,
  //     parameters: requestGetWeightDTO.parameters
  //   }
  //   return EbfExternalTransactionMapper.toGetWeightDTO(await this.appService.getWeight(contractName, parameters));
  // }
  //
  // @ApiOperation({title: 'voter의 투표 여부 확인'})
  // @ApiResponse({ status: 201, description: 'Success' })
  // @Post('/getVoted')
  // public async getVoted(
  //     @Body() requestGetVotedDTO:RequestGetVotedDTO): Promise<ResponseGetVotedDTO> {
  //   const contractName = requestGetVotedDTO.contractName;
  //   const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
  //     contractAddress: requestGetVotedDTO.contractAddress,
  //     parameters: requestGetVotedDTO.parameters
  //   }
  //   return await this.appService.getVoted(contractName, parameters);
  // }

  // @ApiOperation({title: 'voter의 투표 내용 확인'})
  // @ApiResponse({ status: 201, description: 'Success' })
  // @Post('/getVote')
  // public async getVote(
  //     @Body() requestGetVoteDTO:RequestGetVoteDTO): Promise<ResponseGetVoteDTO> {
  //   const contractName = requestGetVoteDTO.contractName;
  //   const parameters: IEbfSendViewRequest<Object> = <IEbfSendViewRequest<Object>>{
  //     contractAddress: requestGetVoteDTO.contractAddress,
  //     parameters: requestGetVoteDTO.parameters
  //   }
  //   return EbfExternalTransactionMapper.toGetVoteDTO(await this.appService.getVote(contractName, parameters));
  // }

}
