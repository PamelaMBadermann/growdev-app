import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { IProfile } from "../../../../features/authentication/domain/model/profile";
import { User } from "./User";

@Entity()
export class Profile implements IProfile {
    @PrimaryColumn()
    username: string;

    @Column({
        length: 100,
        select: false,
    })
    password: string;

    @Column({
        length: 120,
        nullable: true,
    })
    avatarUrl?: string;

    @Column({
        nullable: true,
        select: false,
    })
    phone?: number;

    @OneToOne(() => User)
    @JoinColumn({
        name: "username",
    })
    user: User;
}
