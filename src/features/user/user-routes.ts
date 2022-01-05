import { Request, Response, Router } from "express";
import { InMemoryUserRepository } from "../../core/database/repositories/inmemory-user-repository";
import { UserRepository } from "../../core/database/repositories/user-repository";
import { UserController } from "./user-controller";

export class UserRouter {
    static getRoutes() {
        const routes = Router();
        
        const userRepo = new InMemoryUserRepository();
        const controller = new UserController(userRepo);

        routes.get('/', (req: Request, res: Response) => controller.list(req, res));
        
        routes.post('/', (req: Request, res: Response) => controller.create(req, res));

        return routes;
    }
}
