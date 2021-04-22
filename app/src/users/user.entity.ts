import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity({name:"user"})
export class UserEntity {
    @PrimaryColumn({ type: 'varchar' })
    userid: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ default: 'false'})
    isadmin: boolean;

    @Column({default: 'varchar'})
    username: string;

    @Column({type: 'simple-json', nullable: true})
    voted: JSON;

}
