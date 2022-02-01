import { UseCase } from "../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
import { Impediment } from "../../../../core/infra/database/entities/Impediment";
import { CacheRepository } from "../../../../core/infra/repositories/cache-repository";
import { FindProjectByIdUseCase } from "../../../projects/domain/usecases/find-project-by-id/find-project-by-id-usecase";
import { ImpedimentRepository } from "../../infra/repositories/ImpedimentRepository";
import { IImpediment } from "../models/IImpediment";

export interface IActivateImpedimentParams {
    uid: string;
}

export class ActivateImpedimentUseCase implements UseCase {
    constructor(
        private repository: ImpedimentRepository,
        private cacheRepo: CacheRepository
    ) {}
    async run(data: IActivateImpedimentParams): Promise<any> {
        const impediment = await this.repository.find(data.uid);
        if (!impediment) {
            throw new NotFoundError("Impediment");
        }

        impediment.active = true;

        await this.repository.update(impediment);

        // corrigindo a chave geral
        await this.cacheRepo.delete("impediment:all");

        // corrigindo a chave unica
        await this.cacheRepo.set(
            `impediment:${data.uid}`,
            JSON.stringify(impediment)
        );
    }
}
