import { Repository } from "typeorm";
import { DatabaseConnection } from "../../../../core/infra/database/connections/connection";
import { Project } from "../../../../core/infra/database/entities/Projects";
import { IProject } from "../../domain/model/project";

export class ProjectRepository {
    private readonly repository: Repository<Project>;

    constructor() {
        this.repository =
            DatabaseConnection.getConnection().getRepository(Project);
    }

    async findAll() {
        return await this.repository.find();
    }

    async find(uid: string) {
        return await this.repository.findOne(uid);
    }

    async create(project: IProject) {
        const projectEntity = this.repository.create(project);
        await this.repository.save(projectEntity);
    }
}
