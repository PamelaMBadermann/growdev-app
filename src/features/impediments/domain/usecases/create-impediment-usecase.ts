import { UseCase } from "../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
import { Impediment } from "../../../../core/infra/database/entities/Impediment";
import { CacheRepository } from "../../../../core/infra/repositories/cache-repository";
import { FindProjectByIdUseCase } from "../../../projects/domain/usecases/find-project-by-id/find-project-by-id-usecase";
import { ImpedimentRepository } from "../../infra/repositories/ImpedimentRepository";

export interface ICreateImpediment {
    name: string;
    description: string;
    active: boolean;
    project_uid: string;
}

export class CreateImpedimentUseCase implements UseCase {
    constructor(
        private repository: ImpedimentRepository,
        private findProjectById: FindProjectByIdUseCase,
        private cacheRepo: CacheRepository
    ) {}
    async run(data: ICreateImpediment): Promise<any> {
        const project = await this.findProjectById.run({
            id: data.project_uid,
        });
        if (!project) {
            throw new NotFoundError("Project");
        }

        const result = await this.repository.create({
            ...data,
            project,
        });

        await this.cacheRepo.set(
            `impediment:${result.uid}`,
            JSON.stringify(data)
        );

        await this.cacheRepo.delete("impediment:all");
    }
}
