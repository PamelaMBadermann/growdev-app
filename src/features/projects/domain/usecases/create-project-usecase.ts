import { UseCase } from "../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
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
        private userRepository: UserRepository
    ) {}

    async run(project: CreateProjectParams) {
        const user = await this.userRepository.find(project.username);
        if (!user) {
            throw new NotFoundError("user");
        }

        const result = await this.repository.create({
            ...project,
            user,
        });
    }
}
