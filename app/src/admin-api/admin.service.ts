import {Injectable} from "@nestjs/common";
import {IEbfContractRegisterRequest, IEbfContractRegisterResponse, IEbfSendTransactionRequest, IEbfSendTransactionResponse
} from "../external-transaction/dto/ebf-external-transaction.dto";
import {EbfExternalTransactionService} from "../external-transaction/ebf-external-transaction.service";
import {InjectRepository} from "@nestjs/typeorm";
import {AdminEntity} from "./admin.entity";
import {Repository} from "typeorm";
import {VoteEntity} from "./vote.entity";
import {UserEntity} from "../users/user.entity";

@Injectable()
export class AdminService {
    constructor(
        protected readonly ebfExternalTransactionService: EbfExternalTransactionService,
        @InjectRepository(AdminEntity) private adminRepository: Repository<AdminEntity>,
        @InjectRepository(VoteEntity) private voteRepository: Repository<VoteEntity>,
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) {
        this.adminRepository = adminRepository;
        this.voteRepository = voteRepository;
        this.userRepository = userRepository;
    }

    public async getVoteCount(voteName: string): Promise<number> {
        let vote = await this.findVote(voteName);
        return vote.count;
    }

    public async countUp(voteName: string) {
        let vote = await this.findVote(voteName);
        let up = vote.count + 1;
        this.voteRepository.save(<VoteEntity> {
            votename: vote.votename,
            description: vote.description,
            contractaddress: vote.contractaddress,
            count: up,
        })
    }
    /**
     * Vote 생성
     */
    public async deployVote(adminId: string, contractName: string, description: string, proposals: string[], date: string): Promise<IEbfContractRegisterResponse> {
        let admin = await this.findOne(adminId);
        let param = <IEbfContractRegisterRequest<object>> {
            encodedKeystore: admin.encodedkeystore,
            passphrase: admin.passphrase,
            contractName: contractName,
            abi: admin.abi,
            bytecode: admin.bytecode,
            constructArgs: {
                input: proposals
            },
            value: 0
        }

        let result = <IEbfContractRegisterResponse> await this.ebfExternalTransactionService.sendRegistTransaction(param);
        await this.saveVote(<VoteEntity>{
            votename: contractName,
            description: description,
            contractaddress: result.contractAddress,
            count: 0,
            end: new Date(date),
        });
        return result;
    }

    /**
     * addProposal
     */
    public async addProposal(adminId: string, contractName: string, parameters: string): Promise<IEbfSendTransactionResponse> {
        let admin = await this.findOne(adminId);
        let vote = await this.findVote(contractName);
        let param = <IEbfSendTransactionRequest<object>> {
            encodedKeystore: admin.encodedkeystore,
            passphrase: admin.passphrase,
            parameters: {"proposalName" : parameters},
            value: "0",
            contractAddress: vote.contractaddress,
        }

        return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'addProposal', param);
    }


    /**
     * giveRightToVote
     */
    public async giveRightToVote(adminId: string, contractName: string, eoa: string): Promise<IEbfSendTransactionResponse> {
        let admin = await this.findOne(adminId);
        let vote = await this.findVote(contractName);

        let param = <IEbfSendTransactionRequest<object>> {
            encodedKeystore: admin.encodedkeystore,
            passphrase: admin.passphrase,
            parameters: {"voter" : eoa},
            value: "0",
            contractAddress: vote.contractaddress,
        }
        console.log(param);
        return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'giveRightToVote', param);

    }

    // DB Queries

    public async getUserVotedInfo(id: string): Promise<JSON> {
        let info = await this.userRepository.findOne({userid: id});
        return info.voted;
    }
    public async getAllVotes(): Promise<VoteEntity[]>{
        return await this.voteRepository.find();
    }

    public async getVoteDetail(votename: string): Promise<VoteEntity> {
        return await this.voteRepository.findOne({votename: votename});
    }

    public async findOne(id: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({adminid: id});
    }

    public async findVote(name: string): Promise<VoteEntity> {
        return await this.voteRepository.findOne({votename: name});
    }

    public async saveVote(vote: VoteEntity): Promise<void> {
        await this.voteRepository.save(vote);
        const users = await this.userRepository.find();
        for(let i = 0; i < users.length; i++) {
            // default voted is false
            users[i].voted[vote.votename] = 'false';
            // update
            await this.userRepository.save(<UserEntity>{
                userid: users[i].userid,
                password: users[i].password,
                isadmin: users[i].isadmin,
                username: users[i].username,
                voted: users[i].voted,
            });
        }
    }
}
