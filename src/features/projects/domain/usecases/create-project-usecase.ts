import { create } from "domain";
import { UseCase } from "../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
import { CacheRepository } from "../../../../core/infra/repositories/cache-repository";
import { UserRepository } from "../../../user/infra/repositories/user-repository";
import { ProjectRepository } from "../../infra/repositories/project-repository";

export interface CreateProjectParams {
    username: string;
    name: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
}

export class CreateProjectUseCase implements UseCase {
    constructor(
        private repository: ProjectRepository,
        private userRepository: UserRepository,
        private cacheRepository: CacheRepository
    ) {}

    async run(project: CreateProjectParams) {
        const user = await this.userRepository.find(project.username);
        if (!user) {
            throw new NotFoundError("user");
        }

        const toCreateProject = {
            ...project,
            user,
        };

        // Create no BD relacional
        const created = await this.repository.create(toCreateProject);

        // Set no Redis
        await this.cacheRepository.set(
            `project:${created.uid}`,
            toCreateProject
        );
    }
}
