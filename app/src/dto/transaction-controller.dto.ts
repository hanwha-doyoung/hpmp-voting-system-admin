import { IsNotEmpty, IsString, IsBase64 } from 'class-validator';
import { Expose } from 'class-transformer';
import {ApiModelProperty} from '@nestjs/swagger';

export class RequestRegisterContractDTO {
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
        description: 'Contract ABI',
        example: '[    {      "constant": true,      "inputs": [],      "contractName": "intValue",      "outputs": [        {          "contractName": "",          "type": "int256"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "contractName": "",          "type": "address"        }      ],      "contractName": "balance",      "outputs": [        {          "contractName": "",          "type": "int256"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "anonymous": false,      "inputs": [        {          "indexed": false,          "contractName": "_prevValue",          "type": "int256"        },        {          "indexed": false,          "contractName": "curValue",          "type": "int256"        }      ],      "contractName": "IntValueChange",      "type": "event"    },    {      "constant": false,      "inputs": [],      "contractName": "initialize",      "outputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "contractName": "_intValue",          "type": "int256"        }      ],      "contractName": "set",      "outputs": [        {          "contractName": "",          "type": "bool"        }      ],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    },    {      "constant": true,      "inputs": [],      "contractName": "get",      "outputs": [        {          "contractName": "",          "type": "int256"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "contractName": "_intValue",          "type": "int256"        }      ],      "contractName": "setBalance",      "outputs": [        {          "contractName": "",          "type": "bool"        }      ],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    }  ]'
    })
    @IsNotEmpty()
    public abi: any;

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'Contract bytecode',
        example: '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506119d3806100c96000396000f3fe6080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f146100f6578063013cf08b146101315780630645b8db146101ec5780632e4176cf1461023b5780632fdae3c51461029257806333809b6c1461035a578063429b92bf14610385578063544d8564146104395780635aa82fbe146104ca578063609ff1bd14610533578063671b08741461055e5780638d337b811461058d5780639e7b8d61146105f2578063a3ec138d14610643578063ac637c7a146106ed578063ac6c52511461073e578063e2ba53f0146107a3575b600080fd5b34801561010257600080fd5b5061012f6004803603602081101561011957600080fd5b8101908080359060200190929190505050610833565b005b34801561013d57600080fd5b5061016a6004803603602081101561015457600080fd5b81019080803590602001909291905050506109ed565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156101b0578082015181840152602081019050610195565b50505050905090810190601f1680156101dd5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156101f857600080fd5b506102256004803603602081101561020f57600080fd5b8101908080359060200190929190505050610ab8565b6040518082815260200191505060405180910390f35b34801561024757600080fd5b50610250610ae2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029e57600080fd5b50610358600480360360208110156102b557600080fd5b81019080803590602001906401000000008111156102d257600080fd5b8201836020820111156102e457600080fd5b8035906020019184600183028401116401000000008311171561030657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b07565b005b34801561036657600080fd5b5061036f610c8f565b6040518082815260200191505060405180910390f35b34801561039157600080fd5b506103be600480360360208110156103a857600080fd5b8101908080359060200190929190505050610c9c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103fe5780820151818401526020810190506103e3565b50505050905090810190601f16801561042b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561044557600080fd5b506104886004803603602081101561045c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d5e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104d657600080fd5b50610519600480360360208110156104ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dca565b604051808215151515815260200191505060405180910390f35b34801561053f57600080fd5b50610548610e23565b6040518082815260200191505060405180910390f35b34801561056a57600080fd5b50610573610ea7565b604051808215151515815260200191505060405180910390f35b34801561059957600080fd5b506105dc600480360360208110156105b057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610efe565b6040518082815260200191505060405180910390f35b3480156105fe57600080fd5b506106416004803603602081101561061557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f4a565b005b34801561064f57600080fd5b506106926004803603602081101561066657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110d0565b60405180858152602001841515151581526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390f35b3480156106f957600080fd5b5061073c6004803603602081101561071057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061112d565b005b34801561074a57600080fd5b5061078d6004803603602081101561076157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117ae565b6040518082815260200191505060405180910390f35b3480156107af57600080fd5b506107b86117fa565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f85780820151818401526020810190506107dd565b50505050905090810190601f1680156108255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61083b6118c1565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060806040519081016040529081600082015481526020016001820160009054906101000a900460ff16151515158152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050806020015115151561091e57600080fd5b6000816000015111151561093157600080fd5b600181602001901515908115158152505081816040018181525050806000015160018381548110151561096057fe5b9060005260206000209060020201600101600082825401925050819055507fc591aa98f3e7d1c3a106f4653e39eba694fcc03ba3c686dfbefbf82f6b06bcea3383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b6001818154811015156109fc57fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610aa85780601f10610a7d57610100808354040283529160200191610aa8565b820191906000526020600020905b815481529060010190602001808311610a8b57829003601f168201915b5050505050908060010154905082565b6000600182815481101515610ac957fe5b9060005260206000209060020201600101549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b0f610ea7565b1515610b83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081525060200191505060405180910390fd5b600160408051908101604052808381526020016000815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019080519060200190610be2929190611902565b50602082015181600101555050507fd9ec8fef86fde3db634e2fe8f317cec0a46c66ea51f4227d2e27c502d784f394816040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c52578082015181840152602081019050610c37565b50505050905090810190601f168015610c7f5780820380516001836020036101000a031916815260200191505b509250505060405180910390a150565b6000600180549050905090565b6060600182815481101515610cad57fe5b90600052602060002090600202016000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d525780601f10610d2757610100808354040283529160200191610d52565b820191906000526020600020905b815481529060010190602001808311610d3557829003601f168201915b50505050509050919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff169050919050565b60008060009050600080905060008090505b600180549050811015610e9e5782600182815481101515610e5257fe5b9060005260206000209060020201600101541115610e9157600181815481101515610e7957fe5b90600052602060002090600202016001015492508091505b8080600101915050610e35565b50809250505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549050919050565b610f52610ea7565b1515610fc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081525060200191505060405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615151561102257600080fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507f183719658427839384c1c06dd896988f50c87a91967b29ad1ec1b8ef33ae3dd281604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905084565b6111356118c1565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060806040519081016040529081600082015481526020016001820160009054906101000a900460ff16151515158152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090508060200151151515611281576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f416c726561647920766f746564206163636f756e74000000000000000000000081525060200191505060405180910390fd5b60008160000151111515611323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001807f526967687420746f20766f7465206e6f7420676976656e20627920746865206381526020017f68616972706572736f6e0000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561142a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e6e6f742064656c656761746520746f205a65726f20416464726573730081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515611530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43616e6e6f742064656c656761746520746f206f6e6573656c6600000000000081525060200191505060405180910390fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600181602001901515908115158152505081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507ff6bcbd31d0d65e7cc8b4157b283d8ffcee5b40dd1fa09b91c893b0281536d0a63383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a161167d6118c1565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060806040519081016040529081600082015481526020016001820160009054906101000a900460ff16151515158152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090508060200151156117945781600001516001826040015181548110151561177157fe5b9060005260206000209060020201600101600082825401925050819055506117a9565b81600001518160000181815101915081815250505b505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b60606001611806610e23565b81548110151561181257fe5b90600052602060002090600202016000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118b75780601f1061188c576101008083540402835291602001916118b7565b820191906000526020600020905b81548152906001019060200180831161189a57829003601f168201915b5050505050905090565b6080604051908101604052806000815260200160001515815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061194357805160ff1916838001178555611971565b82800160010185558215611971579182015b82811115611970578251825591602001919060010190611955565b5b50905061197e9190611982565b5090565b6119a491905b808211156119a0576000816000905550600101611988565b5090565b9056fea165627a7a72305820ee2031520ed6a00c5e71af1cd447d2079b3d8d9410126e45c6a12c50aba858240029'
    })
    @IsNotEmpty()
    @IsString()
    public bytecode: string;

    @Expose()
    @ApiModelProperty({
        required: false,
        description: 'Construct Arguments',
        example: {}
    })
    @Expose()
    constructArgs: Map<string, any>;


    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'encodedKeystore',
        example: 'ewogICAgInZlcnNpb24iOiAzLAogICAgImlkIjogImE2ZGZkMmY1LTIyZGUtNGU5MS05NTQ5LTFlMmJkZGEzNzQzOCIsCiAgICAiYWRkcmVzcyI6ICIwNmY2ZmMyYzcxMWZhNWYzNWI3MDg5MTczZDczZjNiZDJiMzg0ZDg3IiwKICAgICJjcnlwdG8iOiB7CiAgICAgICJjaXBoZXJ0ZXh0IjogImVkZDE1ZDZmY2ZlNDg3NzE4YmEzYzdjOGNiNjI0MWExNWRmNGMyYjllMmI4NGY3ZThiZWIxZWZmMDM1NDRkZDgiLAogICAgICAiY2lwaGVycGFyYW1zIjogewogICAgICAgICJpdiI6ICJhMWQ1NDc1NGQwNWExNDJlMzNiMzEyZTUzYWVkYTFjMSIKICAgICAgfSwKICAgICAgImNpcGhlciI6ICJhZXMtMTI4LWN0ciIsCiAgICAgICJrZGYiOiAic2NyeXB0IiwKICAgICAgImtkZnBhcmFtcyI6IHsKICAgICAgICAiZGtsZW4iOiAzMiwKICAgICAgICAic2FsdCI6ICJmNDM4MjQzZmZkMzA0YzQ3MDdkMmNmZGQ4MThjMDBjM2E3NjUxMzQwZWFhZDIyNDIwNmE4OTllYmRiZmJkZDRmIiwKICAgICAgICAibiI6IDgxOTIsCiAgICAgICAgInIiOiA4LAogICAgICAgICJwIjogMQogICAgICB9LAogICAgICAibWFjIjogIjBlNjk1NmIwMTcwODkzNTYwYjlkODkwOTEzZWMzMTE0YzRmODdiNWEzYWNlMjg5ZDFmYzJiZWQwYTIzMmQ3NzEiCiAgICB9CiAgfQ=='
    })
    @IsNotEmpty()
    @IsString()
    public encodedKeystore: string;

    @Expose()
    @ApiModelProperty({
        required: true,
        description: 'passphrase',
        example: '1234'
    })
    @IsNotEmpty()
    @IsString()
    public passphrase: string;

}

export class RequestAddProposalDTO {
    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote10'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        required: true,
        description: 'Encoded keystore of the sender(chairperson)',
        example: 'ewogICAgInZlcnNpb24iOiAzLAogICAgImlkIjogImJmNTU5NDMyLTgyOGUtNDYzYy1iOWQ0LTI5MTkwY2ZiZjdkMSIsCiAgICAiYWRkcmVzcyI6ICIxNWZjOWQ3OTE3Njc3OTMxMGIwYmYyYTg1NjE5ZDEwZTZkNjgyYzkxIiwKICAgICJjcnlwdG8iOiB7CiAgICAgICJjaXBoZXJ0ZXh0IjogIjc2MmU4Nzg2M2M1MWNjNzM0MmJhZmVhOTdmNGNjOGNmZWVmN2Y3YWI2ZGM5MGQxNjI3YWViNDBmN2Q1Y2I5NGEiLAogICAgICAiY2lwaGVycGFyYW1zIjogewogICAgICAgICJpdiI6ICI3YmQ2ZmU1OGUwNWM5MjEzYTI4YTIzMjY5MTJhZWE5ZSIKICAgICAgfSwKICAgICAgImNpcGhlciI6ICJhZXMtMTI4LWN0ciIsCiAgICAgICJrZGYiOiAic2NyeXB0IiwKICAgICAgImtkZnBhcmFtcyI6IHsKICAgICAgICAiZGtsZW4iOiAzMiwKICAgICAgICAic2FsdCI6ICI0NDg3M2U0Njc0NDNmZGIzOWM4NzMzZjVjZWM0MzAyNTg2OTM1ZDdkNmE5MWJiZWRmYTA2MjI0OGZlZDljN2JiIiwKICAgICAgICAibiI6IDgxOTIsCiAgICAgICAgInIiOiA4LAogICAgICAgICJwIjogMQogICAgICB9LAogICAgICAibWFjIjogIjI1NjVmYWRhMTk4ZjcyYmYwYjFiZjk5NzQwN2NmZGY0N2YzN2JiNmM2Y2Q1NDY3YzNkZDQzNWI0NWI4YmQ4MmQiCiAgICB9CiAgfQ=='
    })
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsBase64()
    encodedKeystore: string;

    @ApiModelProperty({
        required: true,
        description: 'Passphrase of the sender(chairperson)',
        example: '1234'
    })
    @Expose()
    passphrase: string;

    @ApiModelProperty({
        required: true,
        description: 'Value',
        example: '0'
    })
    @Expose()
    value: string;


    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0xdeccC41255242Dd126a08318FfdA6e4C9fDdEBf2'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "proposalName": "Alice" }
    })
    @Expose()
    parameters: Map<string, string>;
}

export class RequestGiveRightToVoteDTO {
    @ApiModelProperty({
        required: true,
        description: 'Deployed contract name',
        example: 'Vote11'
    })
    @Expose()
    contractName: string;

    @ApiModelProperty({
        required: true,
        description: 'Encoded keystore of the sender(chairperson)',
        example: 'ewogICAgInZlcnNpb24iOiAzLAogICAgImlkIjogImJmNTU5NDMyLTgyOGUtNDYzYy1iOWQ0LTI5MTkwY2ZiZjdkMSIsCiAgICAiYWRkcmVzcyI6ICIxNWZjOWQ3OTE3Njc3OTMxMGIwYmYyYTg1NjE5ZDEwZTZkNjgyYzkxIiwKICAgICJjcnlwdG8iOiB7CiAgICAgICJjaXBoZXJ0ZXh0IjogIjc2MmU4Nzg2M2M1MWNjNzM0MmJhZmVhOTdmNGNjOGNmZWVmN2Y3YWI2ZGM5MGQxNjI3YWViNDBmN2Q1Y2I5NGEiLAogICAgICAiY2lwaGVycGFyYW1zIjogewogICAgICAgICJpdiI6ICI3YmQ2ZmU1OGUwNWM5MjEzYTI4YTIzMjY5MTJhZWE5ZSIKICAgICAgfSwKICAgICAgImNpcGhlciI6ICJhZXMtMTI4LWN0ciIsCiAgICAgICJrZGYiOiAic2NyeXB0IiwKICAgICAgImtkZnBhcmFtcyI6IHsKICAgICAgICAiZGtsZW4iOiAzMiwKICAgICAgICAic2FsdCI6ICI0NDg3M2U0Njc0NDNmZGIzOWM4NzMzZjVjZWM0MzAyNTg2OTM1ZDdkNmE5MWJiZWRmYTA2MjI0OGZlZDljN2JiIiwKICAgICAgICAibiI6IDgxOTIsCiAgICAgICAgInIiOiA4LAogICAgICAgICJwIjogMQogICAgICB9LAogICAgICAibWFjIjogIjI1NjVmYWRhMTk4ZjcyYmYwYjFiZjk5NzQwN2NmZGY0N2YzN2JiNmM2Y2Q1NDY3YzNkZDQzNWI0NWI4YmQ4MmQiCiAgICB9CiAgfQ=='
    })
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsBase64()
    encodedKeystore: string;

    @ApiModelProperty({
        required: true,
        description: 'Passphrase of the sender(chairperson)',
        example: '1234'
    })
    @Expose()
    passphrase: string;

    @ApiModelProperty({
        required: true,
        description: 'Value',
        example: '0'
    })
    @Expose()
    value: string;


    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0x0aA7F8eB99d68429736606aF09Be9AD041a507C3'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "voter": "e0be176939875a6a6648e61545d9e8e766df2275" }
    })
    @Expose()
    parameters: Map<string, any>;
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
        required: true,
        description: 'Encoded keystore of the sender(voter)',
        example: 'ewogICAgInZlcnNpb24iOiAzLAogICAgImlkIjogIjllMGRiYmE3LWY3NTEtNDY3ZC1hN2U1LTUwZDAwNGFjNGNkYyIsCiAgICAiYWRkcmVzcyI6ICJlMGJlMTc2OTM5ODc1YTZhNjY0OGU2MTU0NWQ5ZThlNzY2ZGYyMjc1IiwKICAgICJjcnlwdG8iOiB7CiAgICAgICJjaXBoZXJ0ZXh0IjogImNiZDdmMTU0Y2U4MDk4YmJmYjVkMjA3N2JlMmQ2NDkzMDQwZTExMDc1MDM2NDE0YTMyYzJhYWRhNzhiNjAzYzIiLAogICAgICAiY2lwaGVycGFyYW1zIjogewogICAgICAgICJpdiI6ICIxZjcxYjFkNTY3NzI3NDJmNjZlNGZjYTcwZTA2NjlhYiIKICAgICAgfSwKICAgICAgImNpcGhlciI6ICJhZXMtMTI4LWN0ciIsCiAgICAgICJrZGYiOiAic2NyeXB0IiwKICAgICAgImtkZnBhcmFtcyI6IHsKICAgICAgICAiZGtsZW4iOiAzMiwKICAgICAgICAic2FsdCI6ICIwYWMyMzdjZjc2MjVkOTkzMjFjOTQyM2M1YTE4MWY2YTVkZDVkMzJlMTVlOTYyZmI1MDgyMmQxNmQ1ZDMxMDhmIiwKICAgICAgICAibiI6IDgxOTIsCiAgICAgICAgInIiOiA4LAogICAgICAgICJwIjogMQogICAgICB9LAogICAgICAibWFjIjogImVkNDQwMTY4NmM5ZTE0OGE4YjE0Yjg2ZGJlZTA3NWI0YWI4ZTEzYzEyMmNiZDU2ZjRlZjhlMGJmNWQzZGFlNDYiCiAgICB9CiAgfQ=='
    })
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsBase64()
    encodedKeystore: string;

    @ApiModelProperty({
        required: true,
        description: 'Passphrase of the sender(chairperson)',
        example: '1234'
    })
    @Expose()
    passphrase: string;

    @ApiModelProperty({
        required: true,
        description: 'Value',
        example: '0'
    })
    @Expose()
    value: string;


    @ApiModelProperty({
        required: false,
        description: 'Deployed contract address',
        example: '0x0aA7F8eB99d68429736606aF09Be9AD041a507C3'
    })
    @Expose()
    contractAddress?: string;

    @ApiModelProperty({
        description: 'Parameters',
        example: { "proposal": "1" }
    })
    @Expose()
    parameters: Map<string, any>;
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
        example: { "idx": "1" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseGetProposalNameDTO {
    name: string;
}

export class RequestGetProposalVoteCountDTO {
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
        example: { "idx": "1" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseGetProposalVoteCountDTO {
    voteCount: number;
}

export class RequestGetNumberOfProposalsDTO {
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
        example: { "idx": "1" }
    })
    @Expose()
    parameters: Map<string, any>;
}

export class ResponseGetNumberOfProposalsDTO {
    number: number;
}

export class RequestWinnerProposalDTO {
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

export class ResponseWinnerProposalDTO {
    index: number;
}


export class RequestWinnerNameDTO {
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

export class ResponseWinnerNameDTO {
    name: string;
}
