import { Repository } from "typeorm";
import { DatabaseConnection } from "../../../../core/infra/database/connections/connection";
import { User } from "../../../../core/infra/database/entities/User";
import { IUser } from "../../../../features/user/domain/model/user";

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
        return await this.repository.find({
            order: {
                nome: "ASC",
                username: "DESC"
            },
            where: {},
        });
    }

    async update(username: string, data: Partial<IUser>) {
        const user = await this.repository.findOne(username);

        if(!user) {
            throw Error('User nao existe');
        }

        // user.idade = Number(data.idade);
        // user.nome = data.nome!;
        // this.repository.save(user);

        await this.repository.update(username, {
            idade: data.idade ?? user.idade
        });
    }
}
