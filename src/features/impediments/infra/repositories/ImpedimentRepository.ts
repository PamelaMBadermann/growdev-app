import { Repository } from "typeorm";
import { DatabaseConnection } from "../../../../core/infra/database/connections/connection";
import { Impediment } from "../../../../core/infra/database/entities/Impediment";
import { IImpediment } from "../../domain/models/IImpediment";
import { ICreateImpediment } from "../../domain/usecases/create-impediment-usecase";

export class ImpedimentRepository {
    private readonly repository: Repository<Impediment>;

    constructor() {
        this.repository =
            DatabaseConnection.getConnection().getRepository(Impediment);
    }

    async findAll() {
        return await this.repository.find({
            relations: ["project"],
        });
    }

    async find(uid: string) {
        return await this.repository.findOne(uid);
    }

    async create(impediment: IImpediment) {
        const imped = this.repository.create(impediment);
        await this.repository.save(imped);

        return imped;
    }

    async update(impediment: Impediment) {
        await this.repository.save(impediment);
    }
}
