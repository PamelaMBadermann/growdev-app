import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { IUser } from "../../../../features/user/domain/model/user";

@Entity()
export class User implements IUser {
    @PrimaryColumn({
        length: 20
    })
    username: string;
    
    @Column({
        length: 30
    })
    nome: string;
    
    @Column({
        length: 11
    })
    cpf: string;
    
    @Column({
        nullable: true
    })
    idade: number;

    @CreateDateColumn()
    created_at: Date;
}
