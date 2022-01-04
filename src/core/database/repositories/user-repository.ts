import { Repository } from "typeorm";
import { IUser } from "../../../features/user/user";
import { DatabaseConnection } from "../connections/connection";
import { User } from "../entities/User";

export class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = DatabaseConnection.getConnection().manager.getRepository(User);
    }

    async create(user: IUser) {
        const userEntity = this.repository.create(user);
        await this.repository.save(userEntity);
    }

    async list() {
        return await this.repository.find();
    }
}
