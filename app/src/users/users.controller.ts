import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity'
import {ApiOperation, ApiResponse, ApiUseTags} from "@nestjs/swagger";
import {RequestVoteDTO} from "../dto/transaction-controller.dto";
import {IEbfSendTransactionResponse} from "../external-transaction/dto/ebf-external-transaction.dto";

@ApiUseTags('User API')
@Controller('user')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) {
        this.userService = userService;
    }
    @ApiOperation({title: 'vote'})
    @ApiResponse({ status: 201, description: 'Success' })
    @Post('/vote')
    public async vote(
        @Body() requestVoteDTO:RequestVoteDTO): Promise<IEbfSendTransactionResponse> {
        const contractName = requestVoteDTO.contractName;
        const param = requestVoteDTO.parameters;
        const userid = requestVoteDTO.userid;

        return await this.userService.vote(userid, contractName, param);
    }

    @Get('list')
    async findAll(): Promise<UserEntity[]> {
        const userList = await this.userService.findAll();
        return Object.assign({
            data: userList,
            statusCode: 200,
            statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
        });
    }
    @Get(':userId')
    async findOne(@Param('userId') id: string): Promise<UserEntity> {
        const foundUser = await this.userService.findOne(id);
        return Object.assign({
            data: foundUser,
            statusCode: 200,
            statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
        });
    }
    @Post()
    async saveUser(@Body() user: UserEntity): Promise<string> {
        console.log("controller")
        console.log(user);
        await this.userService.saveUser(user);
        return Object.assign({
            data: { ...user },
            statusCode: 201,
            statusMsg: `saved successfully`,
        });
    }
    @Delete(':userId')
    async deleteUser(@Param('userId') id: string): Promise<string> {
        await this.userService.deleteUser(id);
        return Object.assign({
            data: { userId: id },
            statusCode: 201,
            statusMsg: `deleted successfully`,
        });
    }
}
