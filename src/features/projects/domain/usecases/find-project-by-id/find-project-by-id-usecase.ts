import { UseCase } from "../../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../../core/domain/errors/not-found-error";
import { ProjectRepository } from "../../../infra/repositories/project-repository";
import { IProject } from "../../model/project";
import { FindProjectByIdParams } from "./models/find-project-by-id-params";

export class FindProjectByIdUseCase implements UseCase {
    constructor(private repository: ProjectRepository) {}

    async run(data: FindProjectByIdParams) {
        try {
            let project: IProject | undefined = await this.repository.find(
                data.id
            );

            if (!project) throw new NotFoundError("Project");

            return project;
        } catch (error: any) {
            throw new Error(error.toString());
        }
    }
}
