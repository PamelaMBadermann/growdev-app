import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
    ok,
    serverError,
} from "../../../../core/presentation/helpers/http-handler";
import { SignUpUseCase } from "../../domain/usecases/signup-usecase";
import { NotProvidedError } from "../errors/not-provided-error";

export class SignUpController implements Controller {
    constructor(private signUpUseCase: SignUpUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const { username, password, avatarUrl, phone } = req.body;

            // ... validações de campos no request
            if (!username) {
                throw new NotProvidedError("username");
            }

            await this.signUpUseCase.run({
                username,
                password,
                avatarUrl,
                phone,
            });

            return ok(res, "perfil criado com sucesso");
        } catch (err) {
            return serverError(res, err);
        }
    }
}
