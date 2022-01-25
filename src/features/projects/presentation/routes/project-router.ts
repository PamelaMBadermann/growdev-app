import { Request, Response, Router } from "express";
import { CacheRepository } from "../../../../core/infra/repositories/cache-repository";
import { UserRepository } from "../../../user/infra/repositories/user-repository";
import { CreateProjectUseCase } from "../../domain/usecases/create-project-usecase";
import { FindProjectByIdUseCase } from "../../domain/usecases/find-project-by-id/find-project-by-id-usecase";
import { ListProjectsUseCase } from "../../domain/usecases/list-projects-usecase";
import { ProjectRepository } from "../../infra/repositories/project-repository";
import { CreateProjectController } from "../controllers/create-project-controller";
import { FindProjectByIdController } from "../controllers/find-project-by-id-controller";
import { ListProjectsController } from "../controllers/list-projects-controller";

const data = [];

export class ProjectRouter {
    static getRoutes() {
        const routes = Router();

        const projectRepository = new ProjectRepository();
        const userRepository = new UserRepository();
        const cacheRepository = new CacheRepository();

        const createProjectUseCase = new CreateProjectUseCase(
            projectRepository,
            userRepository,
            cacheRepository
        );
        const listProjectsUseCase = new ListProjectsUseCase(
            projectRepository,
            cacheRepository
        );

        const createProjectController = new CreateProjectController(
            createProjectUseCase
        );

        const listProjectsController = new ListProjectsController(
            listProjectsUseCase
        );

        routes.post("/", (req: Request, res: Response) =>
            createProjectController.execute(req, res)
        );

        routes.get("/", (req: Request, res: Response) =>
            listProjectsController.execute(req, res)
        );

        const findProjectByIdUseCase = new FindProjectByIdUseCase(
            projectRepository,
            cacheRepository
        );
        const findProjectByIdController = new FindProjectByIdController(
            findProjectByIdUseCase
        );
        routes.get("/:id", (req: Request, res: Response) =>
            findProjectByIdController.execute(req, res)
        );

        return routes;
    }
}
