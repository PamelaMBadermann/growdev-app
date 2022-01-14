import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
    ok,
    serverError,
} from "../../../../core/presentation/helpers/http-handler";
import { LoginUseCase } from "../../domain/usecases/login-usecase";

export class LoginController implements Controller {
    constructor(private loginUseCase: LoginUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            const result = await this.loginUseCase.run({
                username,
                password,
            });

            return ok(res, result);
        } catch (err) {
            return serverError(res, err);
        }
    }
}
