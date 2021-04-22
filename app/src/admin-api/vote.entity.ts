import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity({name: "vote"})
export class VoteEntity {
    @PrimaryColumn({type: 'varchar'})
    votename: string;

    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'varchar', nullable: true})
    contractaddress: string;
}
