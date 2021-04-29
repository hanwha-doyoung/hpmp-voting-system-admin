import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from "./user.entity";
import { Repository } from 'typeorm/index';
import {IEbfSendTransactionRequest, IEbfSendTransactionResponse} from "../external-transaction/dto/ebf-external-transaction.dto";
import {EbfExternalTransactionService} from "../external-transaction/ebf-external-transaction.service";
import {AdminService} from "../admin-api/admin.service";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
        private adminService: AdminService,
        protected readonly ebfExternalTransactionService: EbfExternalTransactionService,
    ) {
        this.userRepository = userRepository;
        this.adminService = adminService;
    }

    public async getVotedInfo(id: string, contractName: string): Promise<boolean> {
        let user: UserEntity = await this.userRepository.findOne({userid: id});
        return user.voted[contractName];
    }

    /**
     * vote
     * @param contractName
     * @param parameters proposalIdx
     */
    public async vote(userid: string, contractName: string, parameters: string): Promise<IEbfSendTransactionResponse> {
        let account = await this.ebfExternalTransactionService.createAccount();
        let encoded = this.ebfExternalTransactionService.encodeAccount(account);
        let vote = await this.adminService.findVote(contractName);
        let param = <IEbfSendTransactionRequest<object>> {
            encodedKeystore: encoded,
            passphrase: "1234",
            parameters: {"proposal": parameters},
            value: "0",
            contractAddress: vote.contractaddress,
        }

        await this.adminService.giveRightToVote("admin", contractName, account.address);
        await this.markVoted(userid, vote.votename);
        await this.adminService.countUp(vote.votename);
        return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'vote', param);
    }

    /**
     * User 리스트 조회
     */
    findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
    /**
     * 특정 유저 조회
     * @param id
     */
    public async findOne(id: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ userid: id });
    }
    /**
     * 유저 저장
     * @param user
     */
    async saveUser(user: UserEntity): Promise<void> {
        console.log("service")
        console.log(user)
        await this.userRepository.save(user);
    }
    /**
     * 유저 삭제
     */
    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete({ userid: id });
    }

    async markVoted(id: string, voteName: string): Promise<void> {
        let account = await this.findOne(id);
        let voteInfo = account.voted;
        voteInfo[voteName] = "true";
        await this.userRepository.save(<UserEntity> {
            userid: account.userid,
            password: account.password,
            isadmin: account.isadmin,
            username: account.userid,
            voted: voteInfo,
        })
    }

    // async countUp(voteName: string): Promise<void> {
    //     let vote = await this.
    // }

}
