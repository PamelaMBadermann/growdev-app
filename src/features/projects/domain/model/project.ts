import { IUser } from "../../../user/domain/model/user";

export interface IProject {
    uid?: string;
    name: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    user: IUser;
}
