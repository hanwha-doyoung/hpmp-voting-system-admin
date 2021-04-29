import { IsNotEmpty, IsString, IsBase64 } from 'class-validator';
import { Expose } from 'class-transformer';
import {ApiModelProperty} from '@nestjs/swagger';

export class RequestLoginDTO {
    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'userId',
        example: 'james'
    })
    public username: string;

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'password',
        example: '1234'
    })
    public password: string;
}

export class ResponseLoginDTO {
    userId: string;
    isAdmin: boolean;
    userName: string;
    voted: JSON;
}

export class RequestVoteDetailDTO {
    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'votename',
        example: 'vote1'
    })
    public votename: string;
}
export class RequestRegisterContractDTO {
    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'adminId',
        example: 'admin'
    })
    @IsNotEmpty()
    @IsString()
    public adminId: string;

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'Contract Name',
        example: 'Vote'
    })
    @IsNotEmpty()
    @IsString()
    public contractName: string;

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'Vote description',
        example: 'Vote about who to be team leader'
    })
    @IsNotEmpty()
    @IsString()
    public description: string;

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'Proposals',
        example: '["Alice", "Peter", "James"]'
    })
    @IsNotEmpty()
    public proposals: string[];

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'end date',
        example: '2021-04-30'
    })
    @IsNotEmpty()
    public date: string;
}

export class RequestAddProposalDTO {
    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'adminId',
        example: 'admin'
    })
    @IsNotEmpty()
    @IsString()
    public adminId: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;


    @ApiModelProperty({
        description: 'Parameters',
        example: "Alice"
    })
    @Expose()
    parameters: string;
}

export class RequestGiveRightToVoteDTO {
    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'adminId',
        example: 'admin'
    })
    @IsNotEmpty()
    @IsString()
    public adminId: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote11'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        required: true,
        description: 'Address of the voter',
        example: 'e0be176939875a6a6648e61545d9e8e766df2275'
    })
    @Expose()
    eoa: string;
}


export class RequestVoteDTO {
    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote11'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'proposal index to vote for',
        example: "1"
    })
    @Expose()
    parameters: string;

    @ApiModelProperty({
        description: 'userid that votes',
        example: "kdy"
    })
    @Expose()
    userid: string;
}


export class RequestIsChairpersonDTO {
    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: ''
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "sender": "0x68242B5674Ff5D4A462dD20511d6fb6dd626639f" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseIsChairpersonDTO {
    result: boolean;
}

export class RequestGetChairpersonDTO {
    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0xdeccC41255242Dd126a08318FfdA6e4C9fDdEBf2'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;
}

export class ResponseGetChairpersonDTO {
    address: string;
}


export class RequestGetWeightDTO {
    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0xdeccC41255242Dd126a08318FfdA6e4C9fDdEBf2'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "voter": "e0be176939875a6a6648e61545d9e8e766df2275" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseGetWeightDTO {
    weight: number;
}


export class RequestGetVotedDTO {
    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0xdeccC41255242Dd126a08318FfdA6e4C9fDdEBf2'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "voter": "e0be176939875a6a6648e61545d9e8e766df2275" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseGetVotedDTO {
    result: any;
}

export class RequestGetVoteDTO {
    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0xdeccC41255242Dd126a08318FfdA6e4C9fDdEBf2'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "voter": "e0be176939875a6a6648e61545d9e8e766df2275" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseGetVoteDTO {
    index: number;
}

export class RequestGetProposalNameDTO {
        @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: "1"
    })
    @Expose()
    parameters: string;
}

export class ResponseGetProposalNameDTO {
    name: string;
}

export class RequestGetProposalVoteCountDTO {
        @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: "1"
    })
    @Expose()
    parameters: string;
}

export class ResponseGetProposalVoteCountDTO {
    voteCount: number;
}

export class RequestGetNumberOfProposalsDTO {
    @ApiModelProperty({
    required: true,
    description: 'Deployed contract name',
    example: 'Vote10'
    })
    @Expose()
    contractName: string;
}

export class ResponseGetNumberOfProposalsDTO {
    number: number;
}

export class ResponseGetAllProposalsDTO {
    proposals: string[];
}

export class ResponseGetTotalVoteCountDTO {
    count: number;
}

export class ResponseGetAllProposalVoteCountDTO {
    results: string[];
}

export class RequestWinnerProposalDTO {
        @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;
}

export class ResponseWinnerProposalDTO {
    index: number;
}


export class RequestWinnerNameDTO {
    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;
}

export class ResponseWinnerNameDTO {
    name: string;
}
