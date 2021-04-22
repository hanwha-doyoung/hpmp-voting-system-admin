import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class AdminEntity {
    @PrimaryColumn({type: 'varchar'})
    adminid: string

    @Column({type: 'varchar'})
    encodedkeystore: string;

    @Column({type: 'varchar'})
    passphrase: string;

    @Column({type: 'jsonb'})
    abi: string;

    @Column({type: 'varchar'})
    bytecode: string;
}
