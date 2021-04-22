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

    /**
     * Vote 생성
     */
    public async deployVote(adminId: string, contractName: string, description: string): Promise<IEbfContractRegisterResponse> {
        let admin = await this.findOne(adminId);
        let param = <IEbfContractRegisterRequest<object>> {
            encodedKeystore: admin.encodedkeystore,
            passphrase: admin.passphrase,
            contractName: contractName,
            abi: admin.abi,
            bytecode: admin.bytecode,
            constructArgs: {},
            value: 0
        }

        let result = <IEbfContractRegisterResponse> await this.ebfExternalTransactionService.sendRegistTransaction(param);

        await this.saveVote(<VoteEntity>{
            votename: contractName,
            description: description,
            contractaddress: result.contractAddress,
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
        return <IEbfSendTransactionResponse> await this.ebfExternalTransactionService.sendTransaction(contractName, 'giveRightToVote', param);

    }

    // DB Queries

    public async findOne(id: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({adminid: id});
    }

    public async findVote(name: string): Promise<VoteEntity > {
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
