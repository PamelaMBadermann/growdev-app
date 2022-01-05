import { IUser } from "./user";

export interface IUserRepository {
    create(user: IUser): Promise<void>;
    list(): Promise<IUser[]>;
}
