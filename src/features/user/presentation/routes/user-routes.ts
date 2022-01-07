import { Request, Response, Router } from "express";
import { UserRepository } from "../../infra/repositories/user-repository";
import { CreateUserController } from "../controller/create-user-controller";
import { ListUserController } from "../controller/list-user-controller";
import { UpdateUserController } from "../controller/update-user-controller";

export class UserRouter {
    static getRoutes() {
        const routes = Router();
        
        const userRepo = new UserRepository();
        const createUserController = new CreateUserController(userRepo);
        const listUserController = new ListUserController(userRepo);
        const updateUserController = new UpdateUserController(userRepo);

        routes.get('/', (req: Request, res: Response) => listUserController.execute(req, res));
        routes.post('/', (req: Request, res: Response) => createUserController.execute(req, res));
        routes.put('/:username', (req: Request, res: Response) => updateUserController.execute(req, res));

        return routes;
    }
}
