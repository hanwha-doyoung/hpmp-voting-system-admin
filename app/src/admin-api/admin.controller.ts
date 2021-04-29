import {ApiOperation, ApiResponse, ApiUseTags} from "@nestjs/swagger";
import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {AdminService} from "./admin.service";
import {
    RequestAddProposalDTO,
    RequestGiveRightToVoteDTO,
    RequestRegisterContractDTO,
    RequestVoteDetailDTO
} from "../dto/transaction-controller.dto";
import {IEbfContractRegisterResponse, IEbfSendTransactionResponse
} from "../external-transaction/dto/ebf-external-transaction.dto";
import {VoteEntity} from "./vote.entity";

@ApiUseTags('Admin API')
@Controller()
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
    ) {
    }
    @Get('/getUserVotedInfo/:id')
    async getUserVotedInfo(@Param('id')  id: string): Promise<JSON> {
        return await this.adminService.getUserVotedInfo(id);
    }

    @ApiOperation({title: 'get all votes'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Get('/getVoteCount/:votename')
    public async getVoteCount(@Param('votename') votename: string): Promise<number> {
        return await this.adminService.getVoteCount(votename);
    }

    @ApiOperation({title: 'get all votes'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Get('/getTotalVoteCount')
    public async getTotalVoteCount(): Promise<number[]> {
        let list = await this.adminService.getAllVotes();
        let returnData = [];
        for(let i=0; i<list.length; i++) {
            returnData[i] = await this.adminService.getVoteCount(list[i].votename);
        }
        return returnData;
    }

    @ApiOperation({title: 'get all votes'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Get('/getAllVotes')
    public async getAllVotes(): Promise<VoteEntity[]> {
        return await this.adminService.getAllVotes();
    }

    @ApiOperation({title: 'get vote details'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Get('/getVoteDetail/:votename')
    public async getVoteDetail(@Param('votename') votename: string): Promise<VoteEntity> {
        return await this.adminService.getVoteDetail(votename);
    }

    @ApiOperation({ title: 'Vote 생성' })
    @ApiResponse({ status: 201, description: 'Success' })
    @Post('/deployVote')
    public async deployVote(@Body() requestRegisterContractDTO:RequestRegisterContractDTO): Promise<IEbfContractRegisterResponse> {
        return await this.adminService.deployVote(requestRegisterContractDTO.adminId, requestRegisterContractDTO.contractName, requestRegisterContractDTO.description, requestRegisterContractDTO.proposals, requestRegisterContractDTO.date);
    }

    // SendTransaction functions
    @ApiOperation({title: 'proposal 추가'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Post('/addProposal')
    public async addProposal(
        @Body() requestAddProposalDTO:RequestAddProposalDTO): Promise<IEbfSendTransactionResponse> {
        const adminId = requestAddProposalDTO.adminId;
        const contractName = requestAddProposalDTO.contractName;
        const parameters = requestAddProposalDTO.parameters;
        return await this.adminService.addProposal(adminId, contractName, parameters);
    }

    @ApiOperation({title: 'giveRightToVote'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Post('/giveRightToVote')
    public async giveRightToVote(
        @Body() requestGiveRightToVoteDTO:RequestGiveRightToVoteDTO): Promise<IEbfSendTransactionResponse> {
        const adminId = requestGiveRightToVoteDTO.adminId;
        const contractName = requestGiveRightToVoteDTO.contractName;
        const eoa = requestGiveRightToVoteDTO.eoa;
        return await this.adminService.giveRightToVote(adminId, contractName, eoa);
    }

}
