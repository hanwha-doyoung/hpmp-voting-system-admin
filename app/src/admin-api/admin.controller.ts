import {ApiOperation, ApiResponse, ApiUseTags} from "@nestjs/swagger";
import {Body, Controller, Post} from "@nestjs/common";
import {AdminService} from "./admin.service";
import {RequestAddProposalDTO, RequestGiveRightToVoteDTO, RequestRegisterContractDTO} from "../dto/transaction-controller.dto";
import {IEbfContractRegisterResponse, IEbfSendTransactionResponse
} from "../external-transaction/dto/ebf-external-transaction.dto";

@ApiUseTags('Admin API')
@Controller()
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
    ) {
    }
    @ApiOperation({ title: 'Vote 생성' })
    @ApiResponse({ status: 201, description: 'Success' })
    @Post('/deployVote')
    public async deployVote(@Body() requestRegisterContractDTO:RequestRegisterContractDTO): Promise<IEbfContractRegisterResponse> {
        return await this.adminService.deployVote(requestRegisterContractDTO.adminId, requestRegisterContractDTO.contractName, requestRegisterContractDTO.description);
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
