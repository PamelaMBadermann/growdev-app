import { IProject } from "../../../projects/domain/model/project";

export interface IImpediment {
    uid?: string;
    name: string;
    description: string;
    active: boolean;
    project: IProject;
}
