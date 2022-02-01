import { UseCase } from "../../../../core/domain/contracts/usecase";
import { CacheRepository } from "../../../../core/infra/repositories/cache-repository";
import { ProjectRepository } from "../../infra/repositories/project-repository";

export class ListProjectsUseCase implements UseCase {
    constructor(
        private repository: ProjectRepository,
        private cacheRepository: CacheRepository
    ) {}

    async run() {
        // const cachedProjects = await this.cacheRepository.get("project:all");
        // if (cachedProjects) {
        //     return cachedProjects;
        // }

        const result = await this.repository.findSecretProjects();

        await this.cacheRepository.hset("project", "project:all", result);

        return result;
    }
}
