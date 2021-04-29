import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity({
    name: "vote",
    orderBy: {
        end: "ASC"
    }
})
export class VoteEntity {
    @PrimaryColumn({type: 'varchar'})
    votename: string;

    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'varchar', nullable: true})
    contractaddress: string;

    @Column({nullable: true})
    count: number;

    @Column({type:'timestamptz'})
    end: Date;
}
