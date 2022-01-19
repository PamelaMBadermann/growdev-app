import { UseCase } from "../../../../core/domain/contracts/usecase";
import { ProjectRepository } from "../../infra/repositories/project-repository";

export class ListProjectsUseCase implements UseCase {
    constructor(private repository: ProjectRepository) {}

    async run() {
        const result = await this.repository.findAll();
        return result;
    }
}
