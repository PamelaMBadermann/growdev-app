import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";
import { IProject } from "../../../../features/projects/domain/model/project";
import { User } from "./User";
import { v4 as createUuid } from "uuid";

@Entity()
export class Project implements IProject {
    @PrimaryColumn({
        type: "uuid",
    })
    uid: string;

    @Column({
        length: 30,
    })
    name: string;

    @Column({
        length: 30,
    })
    description: string;

    @Column({
        nullable: true,
    })
    startDate: Date;

    @Column({
        nullable: true,
    })
    endDate: Date;

    @ManyToOne(() => User, {})
    @JoinColumn({
        name: "username",
    })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.uid = createUuid();
    }
}
