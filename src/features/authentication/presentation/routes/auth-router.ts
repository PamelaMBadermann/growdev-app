import { Request, Response, Router } from "express";
import { UserRepository } from "../../../user/infra/repositories/user-repository";
import { LoginUseCase } from "../../domain/usecases/login-usecase";
import { SignUpUseCase } from "../../domain/usecases/signup-usecase";
import { ProfileRepository } from "../../infra/repositories/profile-repository";
import { LoginController } from "../controllers/login-controller";
import { SignUpController } from "../controllers/signup-controller";

export class AuthRouter {
    static getRoutes() {
        const routes = Router();

        const userRepo = new UserRepository();
        const profileRepo = new ProfileRepository();
        const signUpUseCase = new SignUpUseCase(profileRepo, userRepo);
        const signUpController = new SignUpController(signUpUseCase);

        const loginUseCase = new LoginUseCase(profileRepo);
        const loginController = new LoginController(loginUseCase);

        routes.post("/", (req: Request, res: Response) =>
            signUpController.execute(req, res)
        );

        routes.post("/login", (req: Request, res: Response) =>
            loginController.execute(req, res)
        );

        return routes;
    }
}
