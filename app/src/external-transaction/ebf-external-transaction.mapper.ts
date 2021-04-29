import {
    ResponseGetAllProposalsDTO, ResponseGetAllProposalVoteCountDTO,
    ResponseGetChairpersonDTO, ResponseGetNumberOfProposalsDTO,
    ResponseGetProposalNameDTO, ResponseGetProposalVoteCountDTO,
    ResponseGetVoteDTO,
    ResponseGetWeightDTO, ResponseWinnerNameDTO, ResponseWinnerProposalDTO
} from "../dto/transaction-controller.dto";
import {IEbfSendViewResponse} from "./dto/ebf-external-transaction.dto";

export class EbfExternalTransactionMapper {
    public static toGetChairpersonDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetChairpersonDTO {
        return <ResponseGetChairpersonDTO> {
            address: iEbfSendViewResponse.result
        }
    }
    public static toGetWeightDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetWeightDTO {
        return <ResponseGetWeightDTO> {
            weight: iEbfSendViewResponse.result
        }
    }

    public static toGetVoteDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetVoteDTO {
        return <ResponseGetVoteDTO> {
            index: iEbfSendViewResponse.result
        }
    }

    public static toGetAllProposalsDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetAllProposalsDTO {
        return <ResponseGetAllProposalsDTO> {
            proposals: iEbfSendViewResponse.result
        }
    }

    public static toGetAllProposalVoteCountDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetAllProposalVoteCountDTO {
        return <ResponseGetAllProposalVoteCountDTO> {
            results: iEbfSendViewResponse.result
        }
    }

    public static toGetProposalNameDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetProposalNameDTO {
        return <ResponseGetProposalNameDTO> {
            name: iEbfSendViewResponse.result
        }
    }

    public static toGetProposalVoteCountDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetProposalVoteCountDTO {
        return <ResponseGetProposalVoteCountDTO> {
            voteCount: iEbfSendViewResponse.result
        }
    }

    public static toGetNumberOfProposalsDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseGetNumberOfProposalsDTO {
        return <ResponseGetNumberOfProposalsDTO> {
            number: iEbfSendViewResponse.result
        }
    }

    public static toWinnerProposalDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseWinnerProposalDTO {
        return <ResponseWinnerProposalDTO> {
            index: iEbfSendViewResponse.result
        }
    }

    public static toWinnerNameDTO(iEbfSendViewResponse: IEbfSendViewResponse): ResponseWinnerNameDTO {
        return <ResponseWinnerNameDTO> {
            name: iEbfSendViewResponse.result
        }
    }
}