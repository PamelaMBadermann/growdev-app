import { Request, Response, Router } from "express";
import { UserController } from "./user-controller";

export class UserRouter {
    static getRoutes() {
        const routes = Router();
        const controller = new UserController();

        routes.get('/', (req: Request, res: Response) => controller.list(req, res));
        
        routes.post('/', controller.create);

        return routes;
    }
}
