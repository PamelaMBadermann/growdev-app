import { Repository } from "typeorm";
import { IUser } from "../../../features/user/user";
import { IUserRepository } from "../../../features/user/user-repository";
import { DatabaseConnection } from "../connections/connection";
import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = DatabaseConnection.getConnection().manager.getRepository(User);
    }

    async create(user: IUser) {
        const userEntity = this.repository.create(user);
        await this.repository.save(userEntity);
    }

    async list() {
        return await this.repository.find({
            order: {
                nome: "ASC",
                username: "DESC"
            },
            where: {},
        });
    }
}
