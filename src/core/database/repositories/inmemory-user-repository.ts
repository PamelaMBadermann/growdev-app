import { Repository } from "typeorm";
import { IUser } from "../../../features/user/user";
import { IUserRepository } from "../../../features/user/user-repository";
import { DatabaseConnection } from "../connections/connection";
import { User } from "../entities/User";

export class InMemoryUserRepository implements IUserRepository {
    private repository: IUser[];

    constructor() {
        this.repository = [];
    }

    async create(user: IUser) {
        this.repository.push(user);
    }

    async list() {
        return await this.repository;
    }
}
